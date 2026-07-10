import { Link } from 'react-router-dom'
import { site } from '../../data/site'

export function BrandLogo({ to = '/', footer = false, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="inline-flex items-center" aria-label={`${site.name} home`}>
      <span className={footer ? 'inline-flex rounded-[6px] bg-white px-2 py-1 shadow-[4px_4px_0_rgba(0,0,0,.18)]' : 'inline-flex'}>
        <img
          src={site.logoPath}
          alt={site.name}
          className="h-12 w-auto object-contain"
          width="677"
          height="369"
          decoding="async"
        />
      </span>
    </Link>
  )
}
