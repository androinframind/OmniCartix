import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations(routeKey, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined

    const timer = window.setTimeout(() => {
      const context = gsap.context(() => {
        gsap.utils.toArray('main section:not(#home)').forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: .78, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: .75,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 82%',
                once: true
              }
            }
          )
        })

        gsap.utils.toArray('article, #future li, .node').forEach((item) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, y: 22, scale: .985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: .65,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 88%',
                once: true
              }
            }
          )
        })

        gsap.fromTo(
          'footer',
          { autoAlpha: .7, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: .75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: 'footer',
              start: 'top 92%',
              once: true
            }
          }
        )

        ScrollTrigger.refresh()
      })

      window.__omnicartixGsapContext = context
    }, 120)

    return () => {
      window.clearTimeout(timer)
      window.__omnicartixGsapContext?.revert()
      delete window.__omnicartixGsapContext
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [routeKey, enabled])
}
