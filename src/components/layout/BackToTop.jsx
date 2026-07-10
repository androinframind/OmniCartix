import { useEffect, useState } from 'react'
import { Icon } from '../ui/Icon'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 640)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
      className={`fixed bottom-5 right-5 z-[900] grid h-[52px] w-[52px] place-items-center rounded-[6px] border-0 bg-gradient-to-br from-[#111] to-[#3f3f46] text-white shadow-[6px_6px_0_rgba(0,0,0,.2)] transition-all duration-200 ${visible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0'}`}
    >
      <Icon name="arrowUp" />
    </button>
  )
}
