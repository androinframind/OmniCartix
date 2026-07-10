const icons = {
  home: <><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-7h6v7"/></>,
  sprout: <><path d="M12 3v18"/><path d="M5 10c4 0 7-3 7-7"/><path d="M19 10c-4 0-7-3-7-7"/><path d="M6 18c3 0 6-2 6-6"/><path d="M18 18c-3 0-6-2-6-6"/></>,
  growth: <><path d="M4 19h16"/><path d="M7 16V8"/><path d="M12 16V5"/><path d="M17 16v-6"/><path d="M5 10l7-5 7 5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 4.5 6 4.5 9S15 18 12 21"/><path d="M12 3c-3 3-4.5 6-4.5 9S9 18 12 21"/></>,
  eye: <><path d="M4 12s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z"/><circle cx="12" cy="12" r="3"/></>,
  shield: <><path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z"/><path d="M9 12l2 2 4-5"/></>,
  orbit: <><circle cx="24" cy="24" r="14"/><circle cx="24" cy="10" r="4"/><circle cx="38" cy="30" r="4"/><circle cx="11" cy="31" r="4"/></>,
  pulse: <><path d="M24 5v12"/><path d="M24 31v12"/><path d="M5 24h12"/><path d="M31 24h12"/><circle cx="24" cy="24" r="8"/></>,
  person: <><path d="M10 34c3-8 8-12 14-12s11 4 14 12"/><circle cx="24" cy="16" r="7"/><path d="M12 38h24"/></>,
  chart: <><path d="M8 36l10-10 8 6 14-18"/><path d="M29 14h11v11"/><path d="M8 40h32"/></>,
  wellness: <><path d="M12 21s7-4 7-11a7 7 0 0 0-14 0c0 7 7 11 7 11Z"/><path d="M9 10c2 0 3-1.5 3-4 0 2.5 1 4 3 4"/></>,
  lifestyle: <><path d="M4 16c4-8 12-8 16 0"/><path d="M7 16v3"/><path d="M17 16v3"/><path d="M12 8v11"/></>,
  care: <><path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10Z"/><path d="M9 14c1.5 1.5 4.5 1.5 6 0"/></>,
  fitness: <><path d="M6 12h12"/><path d="M4 9v6"/><path d="M20 9v6"/><path d="M9 8v8"/><path d="M15 8v8"/></>,
  star: <path d="M12 2l2.8 6.5 7 .6-5.3 4.6 1.6 6.8L12 17l-6.1 3.5 1.6-6.8-5.3-4.6 7-.6L12 2Z"/>,
  linkedin: <><path d="M6.5 9.2V19"/><path d="M6.5 5v.1"/><path d="M11 19v-9.8"/><path d="M11 13.2c0-2.2 1.4-4 3.6-4 2.1 0 3.4 1.4 3.4 4V19"/></>,
  x: <><path d="M4 4l16 16"/><path d="M20 4L4 20"/></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r=".8"/></>,
  arrowUp: <><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></>
}

export function Icon({ name, viewBox = '0 0 24 24', className = 'h-6 w-6' }) {
  return (
    <svg viewBox={viewBox} className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name] || icons.star}
    </svg>
  )
}
