import { Link, useLocation } from 'react-router-dom'
import { site } from '../../data/site'
import { BrandLogo } from '../ui/BrandLogo'

const footerLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'Vision', to: '/#vision' },
  { label: 'What We Do', to: '/#what-we-do' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Why Choose', to: '/#why' },
  { label: 'Philosophy', to: '/#philosophy' },
  { label: 'Future', to: '/#future' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' }
]

export function Footer() {
  const location = useLocation()

  return (
    <footer className="bg-[#08111f] py-14 pb-6 text-white/75">
      <div className="container-page grid gap-8 lg:grid-cols-[.85fr_1.1fr]">
        <div>
          <BrandLogo to="/#home" footer />
          <p className="mt-4 max-w-[380px] text-white/70">Building modern consumer brands for everyday living.</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-3 lg:justify-end" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} aria-current={location.pathname === link.to ? 'page' : undefined} className="font-bold text-white/75 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container-page mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {site.year} {site.name}. All Rights Reserved.</p>
        <a href={`mailto:${site.email}`} className="font-bold text-white/75 transition hover:text-white">{site.email}</a>
      </div>
    </footer>
  )
}
