import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from '@/components/ui/Icons'
import { FADE_UP, STAGGER } from '@/constants/motion.constants'


export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start min-h-[520px]">
          {/* Left: Copy */}
          <motion.div
            className="pt-8 lg:pt-16 pb-8"
            variants={STAGGER}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={FADE_UP} className="mb-5">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-gray-600"
                whileHover="hovered"
                initial="rest"
              >
                <motion.span
                  variants={{
                    rest:    { color: '#4b5563' },
                    hovered: { color: '#111827' },
                  }}
                  transition={{ duration: 0.15 }}
                >
                  Introducing autonomous AI workflows
                </motion.span>
                <motion.span
                  variants={{
                    rest:    { x: 0, opacity: 0.5 },
                    hovered: { x: 3, opacity: 1   },
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="flex items-center"
                >
                  <ArrowRight size={14} />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={FADE_UP}
              className="text-5xl sm:text-6xl lg:text-[64px] font-medium tracking-tight text-gray-600 leading-[1.1] mb-6"
            >
              Deploy AI agents that work while you sleep.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={FADE_UP}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Build, deploy, and orchestrate intelligent AI agents that automate complex workflows,
              make decisions, and execute tasks autonomously.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={FADE_UP} className="flex items-center gap-3 flex-wrap">
              <Button variant="primary" size="lg" asLink href="#">
                Get Started
                <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="lg" asLink href="#">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Double border image layout */}
          <div className="relative hidden lg:flex items-center justify-end">
            {/* Blue diagonal decorative bands */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div
                className="absolute right-0 top-0 w-[60%] h-[140%] origin-top-right"
                style={{ transform: 'rotate(-8deg) translateY(-20%)' }}
              >
                {[
                  { left: '0%',  width: '28%', opacity: 1,    color: '#3b82f6' },
                  { left: '30%', width: '20%', opacity: 0.65, color: '#60a5fa' },
                  { left: '52%', width: '15%', opacity: 0.4,  color: '#93c5fd' },
                  { left: '69%', width: '10%', opacity: 0.25, color: '#bfdbfe' },
                  { left: '81%', width: '8%',  opacity: 0.15, color: '#dbeafe' },
                ].map((stripe, i) => (
                  <div
                    key={i}
                    className="absolute top-0 h-full rounded-sm"
                    style={{ left: stripe.left, width: stripe.width, opacity: stripe.opacity, backgroundColor: stripe.color }}
                  />
                ))}
              </div>
            </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative z-10 w-[85%] mt-10 rounded-3xl border border-gray-100 bg-white p-[4px] shadow-sm"
          >
            {/* Inner Border Wrapper */}
            <div className="rounded-[calc(1.5rem-4px)]  border-gray-200/60 bg-white p-[4px]">
              {/* Image Container */}
              <div className="w-full h-64 sm:h-80 md:h-96 rounded-[calc(1.5rem-8px)] bg-gray-200 flex items-center justify-center border border-gray-300/40 shadow-inner">
                <span className="text-gray-500"></span>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
