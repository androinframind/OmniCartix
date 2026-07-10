import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function VisionMission() {
  return (
    <section id="vision" className="section bg-white" aria-labelledby="vision-title">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="vision-title" eyebrow="Direction and standards" title="Our Vision & Mission">
            Clear principles guide how Omnicartix thinks about products, brands, and long-term customer value.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal as="article" className="dark-gradient relative overflow-hidden rounded-[8px] border border-[var(--soft-border)] p-7 text-white shadow-[9px_9px_0_rgba(0,0,0,.14)]">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-[6px] bg-white/15"><Icon name="eye" /></div>
            <h3 className="heading-font text-xl font-extrabold">Vision</h3>
            <p className="mt-3 text-white/80">To become a globally recognized company known for building innovative and trusted consumer brands that improve everyday life.</p>
          </Reveal>
          <Reveal as="article" delay={100} className="relative overflow-hidden rounded-[8px] border border-[var(--soft-border)] bg-white p-7 shadow-[6px_6px_0_rgba(0,0,0,.1)]">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-[6px] bg-black/10 text-[var(--secondary)]"><Icon name="shield" /></div>
            <h3 className="heading-font text-xl font-extrabold text-[var(--primary)]">Mission</h3>
            <p className="mt-3 text-[var(--muted)]">To develop reliable, customer-focused products while maintaining high standards of quality, transparency, and long-term value.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
