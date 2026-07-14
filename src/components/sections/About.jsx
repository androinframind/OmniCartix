import { aboutTimeline } from '../../data/homeSections'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section bg-[var(--background)]" aria-labelledby="about-title">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="about-title" eyebrow="Company foundation" title="About Omnicartix">
            Omnicartix exists to build consumer brands with clarity, care, and long-term value at the centre.
          </SectionHeading>
        </Reveal>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(320px,1.05fr)] lg:gap-14">
          <Reveal as="article" className="rounded-[8px] border border-[var(--soft-border)] bg-white p-6 shadow-[6px_6px_0_rgba(0,0,0,.1)] lg:sticky lg:top-[calc(var(--header-height)+28px)]">
            <p className="text-[var(--muted)]">Omnicartix is a UK-registered company committed to building trusted consumer brands designed for modern lifestyles. Our focus is on identifying everyday needs and delivering thoughtfully developed products that prioritize quality, functionality, and customer satisfaction.</p>
            <p className="mt-4 text-[var(--muted)]">Rather than operating as a single-product business or eCommerce store, Omnicartix serves as the parent company behind multiple consumer-focused brands. Individual brands owned by the company can have their own dedicated websites, each shaped to deliver exceptional experiences within its respective market.</p>
            <div className="mt-6 border-t border-black/10 pt-5">
              <p className="heading-font text-lg font-extrabold text-[var(--primary)]">A more human way to build</p>
              <p className="mt-2 text-[var(--muted)]">Behind every product idea is a simple question: will this make everyday life feel easier, clearer, or better for real people?</p>
            </div>
          </Reveal>
          <ol className="relative grid gap-4 before:absolute before:bottom-6 before:left-8 before:top-6 before:w-0.5 before:bg-gradient-to-b before:from-black/10 before:via-black/25 before:to-black/10" aria-label="Omnicartix development timeline">
            {aboutTimeline.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 80} className="relative grid grid-cols-[64px_minmax(0,1fr)] items-start gap-4 rounded-[6px] border border-[var(--soft-border)] bg-white/90 p-5 shadow-[6px_6px_0_rgba(0,0,0,.08)] max-sm:grid-cols-[52px_minmax(0,1fr)] max-sm:p-4">
                <span className="relative z-[1] grid h-16 w-16 place-items-center rounded-[6px] bg-gradient-to-br from-black/10 to-black/5 text-[var(--secondary)] ring-1 ring-black/10 max-sm:h-13 max-sm:w-13" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="heading-font m-0 font-extrabold tracking-[-.03em] text-[var(--primary)]">{item.title}</h3>
                  <p className="mt-2 text-[var(--muted)]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
