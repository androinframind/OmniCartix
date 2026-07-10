import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1)
      setProgress(Math.min(scrollTop / scrollable, 1))
      ticking = false
    }

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return progress
}
