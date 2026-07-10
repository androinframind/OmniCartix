import { useEffect, useState } from 'react'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function Counter({ target, suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0)
  const { ref, isVisible } = useInViewOnce({ threshold: 0.6 })
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!isVisible) return undefined

    if (prefersReducedMotion) {
      setValue(target)
      return undefined
    }

    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [duration, isVisible, prefersReducedMotion, target])

  return <span ref={ref}>{value}{suffix}</span>
}
