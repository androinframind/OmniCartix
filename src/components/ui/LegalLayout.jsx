import { Reveal } from './Reveal'

export function LegalLayout({ page }) {
  return (
    <>
      <section className="section min-h-0 bg-white pt-[calc(var(--header-height)+3rem)] pb-14">
        <div className="container-page max-w-[820px]">
          <Reveal>
            <p className="eyebrow"><span />{page.eyebrow}</p>
            <h1 className="heading-font m-0 text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[1.04] tracking-[-.055em] text-[var(--primary)]">{page.title}</h1>
            <p className="mt-4 max-w-[720px] text-[clamp(1rem,1.5vw,1.15rem)] text-[var(--muted)]">{page.description}</p>
            <p className="mt-4 font-extrabold text-[var(--secondary)]">Last updated: {page.lastUpdated}</p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-16">
        <div className="container-page grid items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <Reveal as="aside" className="grid gap-2 rounded-[8px] border border-[var(--soft-border)] bg-white p-4 shadow-[6px_6px_0_rgba(0,0,0,.1)] lg:sticky lg:top-[calc(var(--header-height)+24px)]" aria-label={page.sidebarLabel}>
            {page.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="rounded-md border border-[rgba(17,17,17,.1)] bg-white px-3 py-2 font-extrabold text-[var(--secondary)] shadow-[3px_3px_0_rgba(0,0,0,.08)] transition hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_rgba(0,0,0,.12)]">
                {section.nav}
              </a>
            ))}
          </Reveal>

          <Reveal as="article" className="rounded-[8px] border border-[var(--soft-border)] bg-white p-[clamp(1.25rem,4vw,2.5rem)] shadow-[9px_9px_0_rgba(0,0,0,.14)]">
            {page.sections.map((section, index) => (
              <section key={section.id} id={section.id} className={index > 0 ? 'mt-8 border-t border-[rgba(17,17,17,.1)] pt-8' : ''}>
                <h2 className="heading-font m-0 text-[clamp(1.25rem,2.5vw,1.75rem)] font-extrabold tracking-[-.03em] text-[var(--primary)]">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[var(--muted)]">{paragraph}</p>
                ))}
              </section>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
