import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds, enabled = true) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')

  useEffect(() => {
    if (!enabled || !sectionIds.length || !('IntersectionObserver' in window)) return undefined

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, {
      rootMargin: '-38% 0px -55% 0px',
      threshold: 0.01
    })

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [enabled, sectionIds])

  return activeSection
}
