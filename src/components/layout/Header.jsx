import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useBodyLock } from '../../hooks/useBodyLock'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { BrandLogo } from '../ui/BrandLogo'

function getHeaderOffset() {
  return (document.querySelector('[data-header]')?.offsetHeight || 0) + 14
}

function scrollToHash(hash, reducedMotion) {
  const target = document.querySelector(hash)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
  window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' })
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionIds = navItems.map((item) => item.sectionId)
  const activeSection = useActiveSection(sectionIds, location.pathname === '/')

  useBodyLock(isOpen)

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 12)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => setIsOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const onClick = (event) => {
      if (!isOpen) return
      if (menuRef.current?.contains(event.target) || toggleRef.current?.contains(event.target)) return
      setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('click', onClick)
    }
  }, [isOpen])

  useEffect(() => {
    if (location.hash) {
      const timer = window.setTimeout(() => scrollToHash(location.hash, prefersReducedMotion), 50)
      return () => window.clearTimeout(timer)
    }
    return undefined
  }, [location.hash, location.pathname, prefersReducedMotion])

  const handleNav = (event, href) => {
    const [path, hash] = href.split('#')
    if (path === '/' && location.pathname === '/' && hash) {
      event.preventDefault()
      setIsOpen(false)
      window.history.pushState(null, '', `#${hash}`)
      scrollToHash(`#${hash}`, prefersReducedMotion)
      return
    }
    setIsOpen(false)
    navigate(`${path}${hash ? `#${hash}` : ''}`)
    event.preventDefault()
  }

  return (
    <header data-header className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-200 ${isScrolled ? 'border-b border-[rgba(17,17,17,.1)] bg-white/80 shadow-[0_4px_0_rgba(0,0,0,.06)] backdrop-blur-md' : ''}`}>
      <nav className="container-page flex min-h-[var(--header-height)] items-center justify-between" aria-label="Primary navigation">
        <BrandLogo to="/#home" onClick={() => setIsOpen(false)} />

        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((open) => !open)}
          className={`grid h-11 w-11 place-items-center rounded-[6px] border border-[rgba(17,17,17,.14)] bg-white/90 text-[var(--primary)] shadow-[4px_4px_0_rgba(0,0,0,.12)] transition hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0_rgba(0,0,0,.16)] lg:hidden ${isOpen ? 'is-open' : ''}`}
        >
          <span className="block h-0.5 w-[18px] rounded-md bg-current transition" style={{ transform: isOpen ? 'translateY(6px) rotate(45deg)' : undefined }} />
          <span className="my-1 block h-0.5 w-[18px] rounded-md bg-current transition" style={{ opacity: isOpen ? 0 : 1 }} />
          <span className="block h-0.5 w-[18px] rounded-md bg-current transition" style={{ transform: isOpen ? 'translateY(-6px) rotate(-45deg)' : undefined }} />
        </button>

        <div
          ref={menuRef}
          id="primary-menu"
          className={`fixed left-5 right-5 top-[calc(var(--header-height)+10px)] grid origin-top gap-2 rounded-[6px] border border-[rgba(17,17,17,.14)] bg-white/95 p-3 shadow-[9px_9px_0_rgba(0,0,0,.14)] transition-all duration-200 lg:static lg:flex lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${isOpen ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible -translate-y-3 scale-[.98] opacity-0 lg:visible lg:translate-y-0 lg:scale-100 lg:opacity-100'}`}
        >
          {navItems.map((item) => {
            const active = location.pathname === '/' && activeSection === item.sectionId
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={(event) => handleNav(event, item.href)}
                aria-current={active ? 'true' : undefined}
                className={`rounded-md border px-4 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-x-px hover:-translate-y-px lg:px-3 lg:py-2 ${item.button ? 'border-black/30 bg-[var(--primary)] text-white shadow-[4px_4px_0_rgba(0,0,0,.24)] hover:shadow-[6px_6px_0_rgba(0,0,0,.22)]' : 'border-[rgba(17,17,17,.1)] bg-white text-black/70 shadow-[3px_3px_0_rgba(0,0,0,.08)] hover:text-[var(--primary)] hover:shadow-[5px_5px_0_rgba(0,0,0,.12)]'} ${active && !item.button ? 'text-[var(--primary)] shadow-[5px_5px_0_rgba(0,0,0,.12)]' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
