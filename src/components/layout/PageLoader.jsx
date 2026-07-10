import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useBodyLock } from '../../hooks/useBodyLock'

const MINIMUM_LOADER_TIME = 2600
const FALLBACK_READY_TIME = 4200

export function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [pageReady, setPageReady] = useState(false)
  const [minimumTimePassed, setMinimumTimePassed] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  useBodyLock(visible, 'loader-active')

  useEffect(() => {
    const markReady = () => setPageReady(true)

    if (document.readyState === 'complete') {
      markReady()
    } else {
      window.addEventListener('load', markReady, { once: true })
    }

    const minimumTimer = window.setTimeout(() => setMinimumTimePassed(true), MINIMUM_LOADER_TIME)
    const fallbackTimer = window.setTimeout(markReady, FALLBACK_READY_TIME)

    return () => {
      window.removeEventListener('load', markReady)
      window.clearTimeout(minimumTimer)
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    if (!pageReady || !minimumTimePassed) return undefined

    const hideTimer = window.setTimeout(() => setVisible(false), 250)
    return () => window.clearTimeout(hideTimer)
  }, [pageReady, minimumTimePassed])

  const ringAnimation = shouldReduceMotion ? {} : { rotate: 360 }
  const reverseRingAnimation = shouldReduceMotion ? {} : { rotate: -360 }
  const dotAnimation = shouldReduceMotion ? {} : { y: [0, -10, 0], opacity: [.45, 1, .45] }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .45, ease: 'easeOut' }}
        >
          <motion.div
            className="grid place-items-center gap-6"
            initial={{ opacity: 0, scale: .92, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .96, y: -8 }}
            transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative grid h-28 w-28 place-items-center">
              <motion.span
                className="absolute inset-0 rounded-[12px] border border-black/15 shadow-[7px_7px_0_rgba(0,0,0,.12)]"
                animate={ringAnimation}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.span
                className="absolute inset-4 rounded-[8px] border border-dashed border-black/25"
                animate={reverseRingAnimation}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="relative z-[1] grid h-16 w-16 place-items-center rounded-[8px] bg-white p-2 shadow-[6px_6px_0_rgba(0,0,0,.18)]"
                animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src="/assets/Omni_Crtix_logo_png.png" alt="" className="h-full w-full object-contain" width="677" height="369" decoding="async" />
              </motion.div>
            </div>

            <div className="grid justify-items-center gap-3 text-center">
              <motion.p
                className="m-0 text-sm font-extrabold tracking-[.22em] text-[var(--primary)] uppercase"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .15, duration: .4 }}
              >
                Omnicartix
              </motion.p>
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#111] to-[#555]"
                    animate={dotAnimation}
                    transition={{ duration: .85, repeat: Infinity, ease: 'easeInOut', delay: dot * .12 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
