import { useEffect } from 'react'
import { site } from '../data/site'

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element && value) element.setAttribute(attribute, value)
}

export function usePageMeta({ title, description, canonicalPath = '/', ogTitle, ogDescription } = {}) {
  useEffect(() => {
    const pageTitle = title || 'Omnicartix | Modern Consumer Brand Development Company'
    const pageDescription = description || site.description
    const canonical = `${site.url}${canonicalPath === '/' ? '/' : canonicalPath}`

    document.title = pageTitle
    setMeta('meta[name="description"]', 'content', pageDescription)
    setMeta('link[rel="canonical"]', 'href', canonical)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:title"]', 'content', ogTitle || pageTitle)
    setMeta('meta[property="og:description"]', 'content', ogDescription || pageDescription)
    setMeta('meta[name="twitter:title"]', 'content', ogTitle || pageTitle)
    setMeta('meta[name="twitter:description"]', 'content', ogDescription || pageDescription)
  }, [canonicalPath, description, ogDescription, ogTitle, title])
}
