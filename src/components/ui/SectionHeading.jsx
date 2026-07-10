export function SectionHeading({ eyebrow, title, children, id, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-[720px] text-center md:mb-16">
      {eyebrow && <p className={`eyebrow ${light ? 'text-white' : ''}`}><span />{eyebrow}</p>}
      <h2 id={id} className={`heading-font m-0 text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.03] tracking-[-.055em] ${light ? 'text-white' : 'text-[var(--primary)]'}`}>
        {title}
      </h2>
      {children && <p className={`mx-auto mt-4 max-w-[660px] text-[clamp(1rem,2vw,1.12rem)] ${light ? 'text-white/75' : 'text-[var(--muted)]'}`}>{children}</p>}
    </div>
  )
}
