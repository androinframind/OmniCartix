import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useCallback, useLayoutEffect, useState } from 'react'
import { SkipLink } from './components/layout/SkipLink'
import { PageLoader } from './components/layout/PageLoader'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { BackToTop } from './components/layout/BackToTop'
import { useGsapAnimations } from './hooks/useGsapAnimations'
import { Home } from './routes/Home'
import { PrivacyPolicy } from './routes/PrivacyPolicy'
import { TermsAndConditions } from './routes/TermsAndConditions'

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return undefined

    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    window.history.scrollRestoration = 'manual'
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => {
      window.cancelAnimationFrame(frame)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  const location = useLocation()
  const [introComplete, setIntroComplete] = useState(false)
  const handleLoaderComplete = useCallback(() => setIntroComplete(true), [])

  useGsapAnimations(location.pathname, introComplete)

  return (
    <>
      <SkipLink />
      <PageLoader onComplete={handleLoaderComplete} />
      <ScrollProgress />
      <Header introComplete={introComplete} />
      <ScrollToTopOnRoute />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home introComplete={introComplete} />} />
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
