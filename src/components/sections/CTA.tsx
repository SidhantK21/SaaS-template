import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from '@/components/ui/Icons'
import { FADE_UP, STAGGER } from '@/constants/motion.constants'

const TILE_CONTENT = [
  {
    id: 'pricing',
    bgClass: 'bg-slate-50',
    content: (
      <div className="space-y-1.5 p-3 rounded-xl">
        <div className="text-[8px] font-semibold text-gray-700 mb-2">Simple, Transparent Pricing</div>
        {[['Basic', 'Pro', 'Business'], ['$9', '$29', '$99']].map((row, ri) => (
          <div key={ri} className="grid grid-cols-3 gap-1">
            {row.map((cell, ci) => (
              <div key={ci} className={`h-5 rounded text-[7px] flex items-center justify-center ${ri === 1 && ci === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                {cell}
              </div>
            ))}
          </div>
        ))}
        {['AI Agent', 'Email Support', 'Priority Support', 'Analytics'].map(f => (
          <div key={f} className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            <div className="text-[6px] text-gray-500">{f}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'features',
    bgClass: 'bg-blue-50',
    content: (
      <div className="p-3 space-y-2">
        <div className="text-[8px] font-semibold text-gray-700">Build faster with AI</div>
        <div className="grid grid-cols-3 gap-1.5">
          {['AI Code Generation', 'Smart Refactoring', 'Instant Deployment'].map(t => (
            <div key={t} className="bg-gray-50 border border-gray-100 rounded-lg p-1.5">
              <div className="w-5 h-5 rounded bg-blue-100 mb-1.5" />
              <div className="text-[6px] text-gray-500 leading-tight">{t}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'testimonial',
    bgClass: 'bg-linear-to-br from-purple-500 to-pink-500',
    content: (
      <div className="p-3 text-white">
        <div className="text-[8px] mb-3 leading-relaxed opacity-90">
          "The AI-powered insights have helped us move 40% more tasks. It's like having a superpower for sales."
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-white/30" />
          <div>
            <div className="text-[7px] font-medium">Marcus Johnson</div>
            <div className="text-[6px] opacity-75">VP of Sales, Nexus</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'messages',
    bgClass: 'bg-violet-50',
    content: (
      <div className="p-3 space-y-2">
        {[
          { txt: 'Hey! Are you free for a quick call?', left: true,  av: 'TM', color: 'bg-blue-500' },
          { txt: 'Sure, give me 5 minutes!',            left: false, av: 'JD', color: 'bg-violet-400' },
          { txt: 'Sounds good 👍',                      left: true,  av: 'TM', color: 'bg-blue-500' },
          { txt: "I'm not sure if I can make it.",      left: false, av: 'AL', color: 'bg-rose-400' },
        ].map((m, i) => (
          <div key={i} className={`flex items-end gap-1.5 ${m.left ? '' : 'flex-row-reverse'}`}>
            <div className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white text-[6px] font-bold ${m.color}`}>
              {m.av}
            </div>
            <div className={`max-w-[75%] rounded-2xl px-2 py-1.5 text-[7px] leading-relaxed ${m.left ? 'bg-gray-100 text-gray-700' : 'bg-blue-500 text-white'}`}>
              {m.txt}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'world',
    bgClass: 'bg-emerald-50',
    content: (
      <div className="p-3">
        <div className="text-[8px] font-semibold text-gray-700 mb-0.5">All over the world</div>
        <div className="text-[6px] text-gray-500 mb-3">Meet our distributed team working across 6 continents.</div>
        <div className="flex items-end justify-center">
          <div className="w-20 h-10 rounded-t-full border-2 border-gray-200 bg-gray-50" />
        </div>
      </div>
    ),
  },
  {
    id: 'analytics',
    bgClass: 'bg-amber-50',
    content: (
      <div className="p-3 space-y-1.5">
        <div className="text-[8px] font-semibold text-gray-700 mb-2">Live Analytics</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i === 5 ? '#3b82f6' : '#e2e8f0' }} />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <div className="text-[6px] text-gray-400">Mon</div>
          <div className="text-[6px] text-gray-400">Sun</div>
        </div>
      </div>
    ),
  },
]

function ScrollColumn({ tiles, direction }: { tiles: typeof TILE_CONTENT; direction: 'up' | 'down' }) {
  const doubled = [...tiles, ...tiles]

  return (
    <div className="overflow-hidden flex-1">
      <div
        className="flex flex-col gap-3"
        style={{ animation: `${direction === 'down' ? 'cta-scroll-up' : 'cta-scroll-down'} 18s linear infinite` }}
      >
        {doubled.map((tile, i) => (
          <div
            key={`${tile.id}-${i}`}
            className={['rounded-2xl border border-gray-100 overflow-hidden shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)]  ', tile.bgClass].join(' ')}
          >
            {tile.content}
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenshotMosaic() {
  const col1 = TILE_CONTENT.slice(0, 3)
  const col2 = TILE_CONTENT.slice(3)

  return (
    <div className="relative h-[480px] overflow-hidden flex gap-3">
      <style>{`
        @keyframes cta-scroll-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes cta-scroll-down {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <ScrollColumn tiles={col1} direction="up" />
      <ScrollColumn tiles={col2} direction="down" />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white to-transparent pointer-events-none z-10" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />
    </div>
  )
}

export function CTA() {
  return (
    <SectionWrapper className="bg-white">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left copy */}
        <motion.div variants={FADE_UP}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-6">
            Start building autonomous workflows today.
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            Build, deploy, and orchestrate intelligent AI agents that automate complex workflows,
            make decisions, and execute tasks autonomously.
          </p>
          <Button variant="primary" size="lg" asLink href="#">
            Get Started
            <ArrowRight size={16} />
          </Button>
        </motion.div>

        {/* Right mosaic */}
        <motion.div variants={FADE_UP}>
          <ScreenshotMosaic />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
