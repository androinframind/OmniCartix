import { whatWeDo } from '../../data/homeSections'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section bg-[var(--background)]" aria-labelledby="what-title">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="what-title" eyebrow="What we do" title="Building with purpose from idea to experience.">
            Omnicartix focuses on the foundations that help consumer brands become useful, trusted, and prepared for growth.
          </SectionHeading>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whatWeDo.map((item, index) => (
            <Reveal as="article" key={item.title} delay={index * 80} className="group relative min-h-[250px] overflow-hidden rounded-[8px] border border-[var(--soft-border)] bg-white p-6 shadow-[6px_6px_0_rgba(0,0,0,.1)] transition-all duration-200 hover:-translate-y-2 hover:shadow-[9px_9px_0_rgba(0,0,0,.14)]">
              <div className={`animated-icon--${item.icon === 'orbit' ? 'orbit' : item.icon === 'pulse' ? 'pulse' : item.icon === 'person' ? 'float' : 'draw'} mb-5 grid h-16 w-16 place-items-center rounded-[8px] bg-black/10 text-[var(--secondary)]`}>
                <Icon name={item.icon} viewBox="0 0 48 48" className="h-8 w-8" />
              </div>
              <h3 className="heading-font text-xl font-extrabold tracking-[-.03em] text-[var(--primary)]">{item.title}</h3>
              <p className="mt-3 text-[var(--muted)]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
