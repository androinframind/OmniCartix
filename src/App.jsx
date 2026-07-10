import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SkipLink } from './components/layout/SkipLink'
import { PageLoader } from './components/layout/PageLoader'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { BackToTop } from './components/layout/BackToTop'
import { Home } from './routes/Home'
import { PrivacyPolicy } from './routes/PrivacyPolicy'
import { TermsAndConditions } from './routes/TermsAndConditions'

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <SkipLink />
      <PageLoader />
      <ScrollProgress />
      <Header />
      <ScrollToTopOnRoute />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy.html" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/terms-and-conditions.html" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
