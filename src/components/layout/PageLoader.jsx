import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useBodyLock } from '../../hooks/useBodyLock'

const PANEL_COUNT = 10
const PANEL_STAGGER = 0.08
const PANEL_DURATION = 0.28
const INTRO_HOLD_TIME = 120
const MOTION_EASE = [0.76, 0, 0.24, 1]

export function PageLoader({ onComplete }) {
  const shouldReduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const [scrollLocked, setScrollLocked] = useState(true)
  const completedRef = useRef(false)

  useBodyLock(scrollLocked, 'loader-active')

  const completeLoader = useCallback(() => {
    if (completedRef.current) return

    completedRef.current = true
    setScrollLocked(false)
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    if (!visible) return undefined

    const timer = window.setTimeout(() => setVisible(false), shouldReduceMotion ? 40 : INTRO_HOLD_TIME)
    return () => window.clearTimeout(timer)
  }, [shouldReduceMotion, visible])

  const panelContainerVariants = {
    covered: {},
    revealed: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : PANEL_STAGGER,
        staggerDirection: 1
      }
    }
  }

  const panelVariants = {
    covered: { y: '0%' },
    revealed: {
      y: '-101%',
      transition: {
        duration: shouldReduceMotion ? 0.01 : PANEL_DURATION,
        ease: MOTION_EASE
      }
    }
  }

  return (
    <AnimatePresence initial={false} onExitComplete={completeLoader}>
      {visible && (
        <motion.div
          className="page-loader"
          aria-hidden="true"
          initial="covered"
          animate="covered"
          exit="revealed"
        >
          <motion.div className="page-loader__panels" variants={panelContainerVariants}>
            {Array.from({ length: PANEL_COUNT }).map((_, panel) => (
              <motion.span key={panel} className="page-loader__panel" variants={panelVariants} />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
