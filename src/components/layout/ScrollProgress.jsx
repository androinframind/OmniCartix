import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed left-0 top-0 z-[1001] h-[3px] w-full" aria-hidden="true">
      <span className="block h-full origin-left bg-gradient-to-r from-[#111] to-[#6b6b6b] shadow-[0_0_14px_rgba(0,0,0,.2)]" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
