import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations(routeKey) {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined

    const timer = window.setTimeout(() => {
      const context = gsap.context(() => {
        gsap.fromTo(
          '#home .hero__content > *',
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: .8, stagger: .09, ease: 'power3.out', delay: .15 }
        )

        gsap.fromTo(
          '#home video',
          { scale: 1.09 },
          { scale: 1.04, duration: 1.6, ease: 'power3.out' }
        )

        gsap.fromTo(
          '#home .hero-art',
          { autoAlpha: 0, rotate: -2, scale: .96, y: 24 },
          { autoAlpha: 1, rotate: 0, scale: 1, y: 0, duration: 1, ease: 'power3.out', delay: .25 }
        )

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
  }, [routeKey])
}
