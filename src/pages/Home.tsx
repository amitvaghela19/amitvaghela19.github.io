import { Hero } from '../components/home/Hero'
import { Metrics } from '../components/home/Metrics'
import { FeaturedProjects } from '../components/home/FeaturedProjects'
import { WhatIBuild } from '../components/home/WhatIBuild'
import { AboutSnapshot } from '../components/home/AboutSnapshot'
import { HomeCTA } from '../components/home/HomeCTA'

export function Home() {
  return (
    <div className="page" style={{ paddingTop: 'var(--nav-h)' }}>
      <Hero />
      <Metrics />
      <FeaturedProjects />
      <WhatIBuild />
      <AboutSnapshot />
      <HomeCTA />
    </div>
  )
}
