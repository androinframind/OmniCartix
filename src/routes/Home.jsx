import { usePageMeta } from '../hooks/usePageMeta'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { VisionMission } from '../components/sections/VisionMission'
import { WhatWeDo } from '../components/sections/WhatWeDo'
import { Industries } from '../components/sections/Industries'
import { WhyChoose } from '../components/sections/WhyChoose'
import { Philosophy } from '../components/sections/Philosophy'
import { FutureRoadmap } from '../components/sections/FutureRoadmap'
import { Contact } from '../components/sections/Contact'
import { site } from '../data/site'

export function Home({ introComplete = true }) {
  usePageMeta({
    title: 'Omnicartix | Modern Consumer Brand Development Company',
    description: site.description,
    canonicalPath: '/'
  })

  return (
    <>
      <Hero introComplete={introComplete} />
      <About />
      <VisionMission />
      <WhatWeDo />
      <Industries />
      <WhyChoose />
      <Philosophy />
      <FutureRoadmap />
      <Contact />
    </>
  )
}
