import { Navbar }    from '@/components/sections/Navbar'
import { Hero }      from '@/components/sections/Hero'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { Process }   from '@/components/sections/Process'
import { Pricing }   from '@/components/sections/Plans'
import { FAQ }       from '@/components/sections/FAQ'
import { CTA }       from '@/components/sections/CTA'
import { Footer }    from '@/components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
