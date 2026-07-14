import { heroStats } from '../../data/homeSections'
import { Button } from '../ui/Button'
import { Counter } from '../ui/Counter'
import { Reveal } from '../ui/Reveal'

const heroVideoSrc = '/assets/hero%20section%20video.mp4'


function HeroArt() {
  return (
    <svg className="hero-art relative z-[1] mx-auto w-[min(100%,430px)] p-1 sm:w-[min(100%,520px)] lg:w-[min(100%,430px)]" viewBox="0 0 520 520" role="img" aria-labelledby="hero-art-title hero-art-desc">
      <title id="hero-art-title">Abstract connected brand portfolio illustration</title>
      <desc id="hero-art-desc">Gradient shapes and connected nodes symbolizing Omnicartix building a portfolio of consumer brands.</desc>
      <defs>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#111"/><stop offset="100%" stopColor="#737373"/></linearGradient>
        <linearGradient id="darkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0F172A"/><stop offset="100%" stopColor="#3f3f46"/></linearGradient>
      </defs>
      <circle className="hero-art__ring" cx="260" cy="260" r="196" fill="none" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="8 14" />
      <circle className="hero-art__ring hero-art__ring--reverse" cx="260" cy="260" r="142" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="7 12" />
      <path d="M134 179C164 94 294 79 368 137C442 195 464 315 400 391C336 467 209 455 150 386C91 317 104 264 134 179Z" fill="url(#blueGradient)" opacity="0.12" />
      <rect className="hero-art__panel" x="142" y="122" width="236" height="276" rx="42" fill="#fff" />
      <rect x="166" y="148" width="188" height="24" rx="12" fill="#e5e5e5" />
      <rect x="166" y="190" width="112" height="16" rx="8" fill="#d4d4d4" />
      <rect x="166" y="222" width="160" height="16" rx="8" fill="#ededed" />
      <circle cx="209" cy="306" r="44" fill="url(#blueGradient)" />
      <circle cx="311" cy="306" r="44" fill="url(#darkGradient)" />
      <path d="M209 306L260 250L311 306" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="hero-art__node" cx="128" cy="154" r="28" fill="#fff" stroke="#d4d4d4" strokeWidth="2" />
      <path d="M116 154h24M128 142v24" stroke="#111" strokeWidth="5" strokeLinecap="round" />
      <circle className="hero-art__node hero-art__node--delay" cx="420" cy="210" r="32" fill="#fff" stroke="#c7c7c7" strokeWidth="2" />
      <path d="M408 211l8 8 18-20" fill="none" stroke="#525252" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="hero-art__node hero-art__node--slow" cx="386" cy="414" r="30" fill="#fff" stroke="#d4d4d4" strokeWidth="2" />
      <path d="M375 414h22" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="260" cy="260" r="5" fill="#737373" />
      <path className="hero-art__line" d="M154 172C203 208 216 228 260 260C315 231 358 219 392 211" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 10" />
      <path className="hero-art__line" d="M260 260C301 305 341 354 371 392" fill="none" stroke="#737373" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 10" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden bg-white pt-[calc(var(--header-height)+.65rem)] pb-7" aria-labelledby="hero-title">
      <video
        className="pointer-events-none fixed inset-x-0 top-[-8%] z-0 h-[116svh] w-full object-cover opacity-[.86] will-change-transform"
        style={{ transform: 'scale(1.04)' }}
        src={heroVideoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-white/20" aria-hidden="true" />
      <div className="container-page relative z-[1] grid items-center gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,.78fr)]">
        <Reveal className="hero__content">
          <p className="eyebrow text-black"><span />UK-registered consumer brand development company</p>
          <h1 id="hero-title" className="heading-font max-w-[620px] text-[clamp(2.15rem,4.2vw,4.15rem)] font-extrabold leading-[1.06] tracking-[-.055em] text-black">Building Modern Consumer Brands for Everyday Living.</h1>
          <p className="mt-3 max-w-[600px] text-[clamp(.94rem,1.16vw,1.02rem)] font-semibold leading-[1.58] text-[#151518]">Omnicartix is a UK-registered company focused on developing high-quality consumer brands across wellness, lifestyle, home, and emerging product categories. This is the official corporate website for Omnicartix, not an eCommerce store. We believe in creating products that combine innovation, reliability, and exceptional customer experience.</p>
          <div className="mt-5 flex flex-wrap gap-3" aria-label="Hero calls to action">
            <Button href="#about" className="min-h-[46px] px-4 py-3 ring-1 ring-black/15">Explore Our Company</Button>
            <Button href="#contact" variant="secondary" className="min-h-[46px] bg-white px-4 py-3 text-black shadow-[5px_5px_0_rgba(0,0,0,.12)] ring-1 ring-black/15">Contact Us</Button>
          </div>
          <div className="mt-5 max-w-[560px] border-l-2 border-black/30 pl-4 text-sm font-bold text-black">
            Built around everyday needs, careful product thinking, and customer experiences that feel simple, useful, and dependable.
          </div>
          <dl className="mt-5 grid grid-cols-3 gap-2" aria-label="Website focus statistics">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-[6px] border border-[rgba(17,17,17,.1)] bg-white/90 p-3 shadow-[5px_5px_0_rgba(0,0,0,.08)] max-sm:px-2 max-sm:py-2">
                <dt className="heading-font text-[clamp(1.25rem,2.6vw,1.75rem)] font-extrabold leading-none text-[var(--primary)]"><Counter target={stat.target} /></dt>
                <dd className="mt-1 text-[.78rem] leading-tight text-[var(--muted)] max-sm:text-[.68rem]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-[430px]" delay={120}>
          <div className="relative overflow-hidden rounded-[12px] border border-[rgba(17,17,17,.12)] bg-white/90 shadow-[10px_10px_0_rgba(0,0,0,.14)] backdrop-blur-sm will-change-transform">
            <span className="absolute right-14 top-[-18px] h-[70px] w-[70px] rounded-md bg-gradient-to-br from-[#111] to-[#777] opacity-[.08]" />
            <span className="absolute bottom-[-24px] left-12 h-[92px] w-[92px] rounded-md bg-gradient-to-br from-[#111] to-[#777] opacity-[.08]" />
            <HeroArt />
          </div>
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-[-1px] h-11 bg-gradient-to-b from-transparent to-[var(--background)] [clip-path:polygon(0_48%,14%_58%,30%_43%,48%_57%,66%_42%,82%_56%,100%_45%,100%_100%,0_100%)]" aria-hidden="true" />
    </section>
  )
}
