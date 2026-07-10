import { termsAndConditions } from '../data/legalPages'
import { usePageMeta } from '../hooks/usePageMeta'
import { LegalLayout } from '../components/ui/LegalLayout'

export function TermsAndConditions() {
  usePageMeta({
    title: termsAndConditions.metaTitle,
    description: termsAndConditions.metaDescription,
    canonicalPath: termsAndConditions.canonicalPath
  })

  return <LegalLayout page={termsAndConditions} />
}
