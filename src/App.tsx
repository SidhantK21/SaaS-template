import { Navbar }        from '@/components/sections/Navbar'
import { Hero }          from '@/components/sections/Hero'
import { TrustedBy }     from '@/components/sections/TrustedBy'
import { Features }      from '@/components/sections/Features'
import { MiniFeatures }  from '@/components/sections/MiniFeatures'
import { CrossPlatform } from '@/components/sections/CrossPlatform'
import { Security }      from '@/components/sections/Security'
import { Pricing }       from '@/components/sections/Pricing'
import { FAQ }           from '@/components/sections/FAQ'
import { CTA }           from '@/components/sections/CTA'
import { Footer }        from '@/components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <MiniFeatures />
      <CrossPlatform />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
