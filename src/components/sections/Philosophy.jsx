import { philosophyNodes } from '../../data/homeSections'
import { Reveal } from '../ui/Reveal'

const nodePositions = {
  'node--primary': 'top-1/2 left-1/2 h-[132px] w-[174px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[var(--primary)] to-[#1f1f23] text-white',
  'node--top': 'top-[9%] left-1/2 -translate-x-1/2',
  'node--right': 'right-[8%] top-1/2 -translate-y-1/2',
  'node--bottom': 'bottom-[9%] left-1/2 -translate-x-1/2',
  'node--left': 'left-[8%] top-1/2 -translate-y-1/2'
}

export function Philosophy() {
  return (
    <section id="philosophy" className="section overflow-hidden bg-gradient-to-br from-white to-[var(--background)]" aria-labelledby="philosophy-title">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,.85fr)_minmax(360px,1fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow"><span />Growth philosophy</p>
          <h2 id="philosophy-title" className="heading-font text-[clamp(2rem,4.6vw,4rem)] font-extrabold leading-[1.03] tracking-[-.055em] text-[var(--primary)]">Thoughtful innovation, responsible growth, lasting value.</h2>
          <p className="mt-5 text-lg text-[var(--muted)]">We believe sustainable growth is built through thoughtful innovation, responsible business practices, and a genuine commitment to delivering value. Every brand developed under Omnicartix reflects our dedication to quality, trust, and long-term customer relationships.</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-extrabold text-[var(--secondary)]">Start a conversation <span aria-hidden="true">→</span></a>
        </Reveal>

        <Reveal className="relative min-h-[520px] rounded-[12px] border border-white/70 bg-white/80 p-4 shadow-[12px_12px_0_rgba(0,0,0,.16)] max-md:grid max-md:min-h-0 max-md:gap-3 max-md:rounded-[8px]" aria-label="Connected growth philosophy infographic">
          <div className="node-map__line absolute inset-[72px] rounded-full border-2 border-dashed border-black/20 max-md:hidden" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 h-0.5 w-[62%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent max-md:hidden" />
          <div className="absolute left-1/2 top-1/2 h-0.5 w-[62%] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gradient-to-r from-transparent via-black/20 to-transparent max-md:hidden" />
          {philosophyNodes.map((item) => (
            <div key={item.title} className={`node absolute z-[1] grid min-h-[116px] w-[154px] place-items-center rounded-[6px] border border-black/10 bg-white/90 p-4 text-center shadow-[6px_6px_0_rgba(0,0,0,.1)] max-md:relative max-md:inset-auto max-md:h-auto max-md:min-h-0 max-md:w-full max-md:translate-x-0 max-md:translate-y-0 max-md:animate-none ${nodePositions[item.className]}`}>
              <div>
                <strong className="heading-font block font-extrabold">{item.title}</strong>
                <span className={item.className === 'node--primary' ? 'text-white/80' : 'text-[var(--muted)]'}>{item.body}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
