import { whyChoose } from '../../data/homeSections'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyChoose() {
  return (
    <section id="why" className="section bg-gradient-to-b from-[var(--background)] to-white" aria-labelledby="why-title">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="why-title" eyebrow="Why choose Omnicartix" title="A measured approach to building trusted brands.">
            Our operating principles are designed to support quality, responsible growth, and strong customer relationships.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, index) => (
            <Reveal as="article" key={item.title} delay={index * 60} className="min-h-[210px] rounded-[8px] border border-[var(--soft-border)] bg-white p-6 shadow-[6px_6px_0_rgba(0,0,0,.1)] transition-all duration-200 hover:-translate-y-2 hover:shadow-[9px_9px_0_rgba(0,0,0,.14)]">
              <span className="mb-5 inline-flex h-8 w-12 items-center justify-center rounded-md bg-black/10 text-xs font-black tracking-wider text-[var(--secondary)]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="heading-font text-xl font-extrabold tracking-[-.03em] text-[var(--primary)]">{item.title}</h3>
              <p className="mt-3 text-[var(--muted)]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
