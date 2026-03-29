import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Lightning, BarChart, Puzzle } from '@/components/ui/Icons'
import { STAGGER, FADE_UP } from '@/constants/motion.constants'
import { MINI_FEATURES } from '@/constants/features.constants'

type IconVariant = 'lightning' | 'chart' | 'puzzle'

const ICON_MAP: Record<IconVariant, typeof Lightning> = {
  lightning: Lightning,
  chart:     BarChart,
  puzzle:    Puzzle,
}

export function MiniFeatures() {
  return (
    <SectionWrapper className="bg-white pt-6! md:pt-1!">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {MINI_FEATURES.map(f => {
          const Icon = ICON_MAP[f.iconVariant]
          return (
            <motion.div key={f.id} variants={FADE_UP}>
              <div className="mb-3 text-gray-700">
                <Icon size={22} />
              </div>
              <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
