import { useInViewOnce } from '../../hooks/useInViewOnce'

export function Reveal({ as: Component = 'div', children, className = '', delay = 0, style, ...props }) {
  const { ref, isVisible } = useInViewOnce()

  return (
    <Component
      ref={ref}
      className={`reveal-base ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  )
}
