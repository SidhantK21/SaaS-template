import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { FADE_UP, STAGGER } from "@/constants/motion.constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-32">
      {/* Dot grid background — fades from sides */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '14px 14px',
          maskImage: 'radial-gradient(ellipse 50% 80% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 80% at 50% 50%, black 20%, transparent 100%)',
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center min-h-[420px]">
          <motion.div
            className="pt-8 lg:pt-16 pb-8 max-w-4xl"
            variants={STAGGER}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={FADE_UP} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium  text-gray-600 bg-blue-100 border border-blue-200">
                Helping brands scale through marketing & technology
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={FADE_UP}
              className="text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-gray-600 leading-[1.1] mb-6 text-balance"
            >
              Revenue-First Digital Marketing & Software Solutions
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={FADE_UP}
              className="text-lg text-gray-500 leading-relaxed mb-8"
            >
              We build high-converting websites, growth-focused marketing
              campaigns, and custom software solutions that help businesses
              scale faster.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={FADE_UP}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              <Button variant="primary" size="lg" asLink href="#">
                Get Started
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
