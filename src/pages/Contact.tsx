import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { motion } from 'motion/react'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { FADE_UP, STAGGER } from '@/constants/motion.constants'

export default function Contact() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <SectionWrapper className="pb-0!">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={STAGGER}
        >
          <motion.h1
            variants={FADE_UP}
            className="text-5xl md:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-5"
          >
            Let's talk about<br />your project.
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-base text-gray-500 max-w-lg">
            Pick a time that works for you. We'll spend 30 minutes understanding your goals and figuring out if we're the right fit.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* Calendar embed */}
      <SectionWrapper className="flex-1 items-start pt-8! ">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          className="mr-auto"
        >
          <Cal
            namespace="30min"
            calLink="sidhant-singh-rathore-ias72r/30min"
            config={{ layout: 'month_view' }}
            style={{ width: '100%', height: '100%', overflow: 'scroll', marginLeft: 0 }}
          />
        </motion.div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
