import { useEffect } from 'react'

export function useBodyLock(locked, className = 'menu-open') {
  useEffect(() => {
    document.body.classList.toggle(className, locked)

    return () => document.body.classList.remove(className)
  }, [locked, className])
}
