import { industries } from '../../data/homeSections'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Industries() {
  return (
    <section id="industries" className="section bg-white" aria-labelledby="industries-title">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="industries-title" eyebrow="Consumer focus areas" title="Industries We Focus On">
            A flexible portfolio approach allows Omnicartix to explore product categories aligned with modern everyday living.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <Reveal as="article" key={item.title} delay={index * 60} className="flex min-h-32 items-center gap-4 rounded-[8px] border border-[var(--soft-border)] bg-white p-5 shadow-[6px_6px_0_rgba(0,0,0,.1)] transition-all duration-200 hover:-translate-y-2 hover:shadow-[9px_9px_0_rgba(0,0,0,.14)]">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[6px] bg-black/10 text-[var(--secondary)]" aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              <h3 className="heading-font text-lg font-extrabold tracking-[-.03em] text-[var(--primary)]">{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
