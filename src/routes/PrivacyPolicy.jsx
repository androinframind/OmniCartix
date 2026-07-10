import { privacyPolicy } from '../data/legalPages'
import { usePageMeta } from '../hooks/usePageMeta'
import { LegalLayout } from '../components/ui/LegalLayout'

export function PrivacyPolicy() {
  usePageMeta({
    title: privacyPolicy.metaTitle,
    description: privacyPolicy.metaDescription,
    canonicalPath: privacyPolicy.canonicalPath
  })

  return <LegalLayout page={privacyPolicy} />
}
