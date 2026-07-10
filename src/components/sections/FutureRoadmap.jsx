import { futureSteps } from '../../data/homeSections'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FutureRoadmap() {
  return (
    <section id="future" className="section overflow-hidden bg-[var(--primary)] text-white" aria-labelledby="future-title">
      <div className="container-page relative z-[1]">
        <Reveal>
          <SectionHeading id="future-title" eyebrow="Future vision" title="A clear roadmap for brand-led growth." light>
            Omnicartix is building patiently and intentionally, with every step focused on better products and stronger customer experiences.
          </SectionHeading>
        </Reveal>
        <ol className="relative grid gap-4 before:absolute before:left-[10%] before:right-[10%] before:top-[34px] before:h-0.5 before:bg-gradient-to-r before:from-white/10 before:via-white/60 before:to-white/10 md:grid-cols-3 max-md:before:hidden" aria-label="Omnicartix future vision timeline">
          {futureSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 90} className="relative rounded-[8px] border border-white/15 bg-white/10 p-6 shadow-[9px_9px_0_rgba(0,0,0,.24)]">
              <span className="future-marker relative z-[1] mb-6 block h-6 w-6 rounded-full border-[5px] border-white bg-[var(--accent)] shadow-[0_0_0_8px_rgba(255,255,255,.16)]" aria-hidden="true" />
              <h3 className="heading-font text-xl font-extrabold">{step.title}</h3>
              <p className="mt-2 text-white/75">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
