import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useInViewOnce(options = { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || isVisible) return undefined

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        instance.unobserve(entry.target)
      })
    }, options)

    observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible, options, prefersReducedMotion])

  return { ref, isVisible: isVisible || prefersReducedMotion }
}
