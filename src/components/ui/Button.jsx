import { Link } from 'react-router-dom'

const baseClasses = 'inline-flex min-h-[52px] items-center justify-center rounded-[6px] px-5 py-3 font-extrabold leading-none transition-all duration-200 ease-[var(--ease)] hover:-translate-y-1'
const variants = {
  primary: 'brand-gradient text-white shadow-[5px_5px_0_rgba(0,0,0,.18)] hover:shadow-[7px_7px_0_rgba(0,0,0,.22)]',
  secondary: 'border border-[rgba(17,17,17,.16)] bg-white/90 text-[var(--primary)] shadow-[6px_6px_0_rgba(0,0,0,.1)] hover:bg-white hover:text-[var(--secondary)]'
}

export function Button({ href, to, children, variant = 'primary', full = false, className = '', ...props }) {
  const classes = `${baseClasses} ${variants[variant]} ${full ? 'w-full' : ''} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }

  return <a href={href} className={classes} {...props}>{children}</a>
}
