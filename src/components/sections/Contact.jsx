import { useRef, useState } from 'react'
import { site } from '../../data/site'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'

const initialValues = { fullName: '', email: '', company: '', subject: '', message: '' }

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const fieldRefs = useRef({})

  const validateField = (name, value) => {
    if (['fullName', 'email', 'subject', 'message'].includes(name) && !value.trim()) return 'This field is required.'
    if (name === 'email' && value.trim() && !validateEmail(value.trim())) return 'Please enter a valid email address.'
    if (name === 'message' && value.trim() && value.trim().length < 10) return 'Please include a little more detail in your message.'
    return ''
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = Object.fromEntries(Object.entries(values).map(([name, value]) => [name, validateField(name, value)]))
    setErrors(nextErrors)

    const firstInvalid = Object.entries(nextErrors).find(([, error]) => error)?.[0]
    if (firstInvalid) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields before submitting.' })
      fieldRefs.current[firstInvalid]?.focus()
      return
    }

    const payload = { ...values, submittedAt: new Date().toISOString() }
    void payload
    setStatus({ type: 'success', message: 'Thank you — your message has been prepared successfully. Omnicartix can connect this form to a backend endpoint when ready.' })
    setValues(initialValues)
    setErrors({})
  }

  const fieldProps = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleChange,
    ref: (node) => { fieldRefs.current[name] = node },
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined
  })

  return (
    <section id="contact" className="section bg-[var(--background)]" aria-labelledby="contact-title">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[minmax(0,.85fr)_minmax(360px,1fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow"><span />Contact</p>
          <h2 id="contact-title" className="heading-font text-[clamp(2rem,4.6vw,4rem)] font-extrabold leading-[1.03] tracking-[-.055em] text-[var(--primary)]">Connect with Omnicartix Ltd.</h2>
          <p className="mt-4 max-w-[580px] text-lg text-[var(--muted)]">For company enquiries, brand development discussions, or partnership conversations, use the form and the team can review your message.</p>

          <div className="mt-8 rounded-[8px] border border-[var(--soft-border)] bg-white p-6 shadow-[6px_6px_0_rgba(0,0,0,.1)]">
            <h3 className="heading-font mb-4 text-xl font-extrabold text-[var(--primary)]">Company Information</h3>
            <dl className="grid gap-4">
              {[['Company Name', site.name], ['Business Type', site.businessType], ['Location', site.location], ['Email', site.email]].map(([term, value]) => (
                <div key={term} className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted)]">{term}</dt>
                  <dd className="mt-1 font-bold text-[var(--primary)]">{term === 'Email' ? <a href={`mailto:${value}`} className="underline decoration-2 underline-offset-4">{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex gap-3" aria-label="Social media placeholders">
              {['linkedin', 'x', 'instagram'].map((name) => (
                <span key={name} className="grid h-11 w-11 place-items-center rounded-[6px] border border-black/10 bg-black/5 text-[var(--secondary)]" role="img" aria-label={`${name} placeholder`}>
                  <Icon name={name} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal as="form" id="contact-form" className="rounded-[8px] border border-[var(--soft-border)] bg-white p-6 shadow-[6px_6px_0_rgba(0,0,0,.1)]" noValidate onSubmit={handleSubmit}>
          <div className={`mb-4 rounded-[6px] p-4 font-extrabold ${status ? 'block' : 'hidden'} ${status?.type === 'success' ? 'border border-green-600/20 bg-green-600/10 text-green-700' : 'border border-red-600/20 bg-red-600/10 text-red-700'}`} role="status" aria-live="polite">
            {status?.message}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Full Name" id="fullName" error={errors.fullName}><input type="text" autoComplete="name" required {...fieldProps('fullName')} /></FormField>
            <FormField label="Email Address" id="email" error={errors.email}><input type="email" autoComplete="email" required {...fieldProps('email')} /></FormField>
          </div>
          <FormField label="Company" optional id="company" error={errors.company}><input type="text" autoComplete="organization" {...fieldProps('company')} /></FormField>
          <FormField label="Subject" id="subject" error={errors.subject}><input type="text" required {...fieldProps('subject')} /></FormField>
          <FormField label="Message" id="message" error={errors.message}><textarea rows="6" required {...fieldProps('message')} /></FormField>
          <button className="brand-gradient mt-2 min-h-[52px] w-full rounded-[6px] px-5 py-3 font-extrabold text-white shadow-[5px_5px_0_rgba(0,0,0,.18)] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_rgba(0,0,0,.22)]" type="submit">Submit Message</button>
          <p className="mt-3 text-sm text-[var(--muted)]">Your message is handled as a genuine company enquiry. This form is currently configured for frontend validation and can be connected to a backend endpoint later.</p>
        </Reveal>
      </div>
    </section>
  )
}

function FormField({ label, optional = false, id, error, children }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 flex justify-between font-extrabold text-[var(--primary)]">
        {label} {optional && <span className="text-sm font-semibold text-[var(--muted)]">(Optional)</span>}
      </label>
      <div className="[&_input]:w-full [&_input]:rounded-[6px] [&_input]:border [&_input]:border-black/10 [&_input]:bg-white [&_input]:px-4 [&_input]:py-3 [&_input]:outline-none [&_input]:transition [&_input:focus]:border-black/40 [&_input:focus]:shadow-[0_0_0_4px_rgba(0,0,0,.08)] [&_textarea]:min-h-[150px] [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:rounded-[6px] [&_textarea]:border [&_textarea]:border-black/10 [&_textarea]:bg-white [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:outline-none [&_textarea]:transition [&_textarea:focus]:border-black/40 [&_textarea:focus]:shadow-[0_0_0_4px_rgba(0,0,0,.08)]">
        {children}
      </div>
      <p id={`${id}-error`} className="mt-1 min-h-5 text-sm font-bold text-red-700">{error}</p>
    </div>
  )
}
