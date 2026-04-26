import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from '@/components/ui/Icons'
import { FADE_UP, STAGGER } from '@/constants/motion.constants'

const TILE_CONTENT = [
  {
    id: 'campaign',
    bgClass: 'bg-white',
    content: (
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between mb-1">
          <div className="text-[8px] font-semibold text-gray-700">Campaign Performance</div>
          <div className="text-[7px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">↑ Live</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[['4.2×', 'ROAS'], ['3.8%', 'CTR'], ['₹2.1L', 'Revenue']].map(([val, label]) => (
            <div key={label} className="bg-gray-50 border border-gray-100 rounded-lg p-2">
              <div className="text-[12px] font-semibold text-gray-900">{val}</div>
              <div className="text-[7px] text-gray-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 h-8 pt-1">
          {[30, 42, 38, 55, 60, 72, 80, 85, 90, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i >= 6 ? '#3b82f6' : '#e2e8f0' }} />
          ))}
        </div>
        <div className="text-[7px] text-gray-400">Google Ads · Meta · Oct 2024</div>
      </div>
    ),
  },
  {
    id: 'testimonial',
    bgClass: 'bg-linear-to-br from-blue-600 to-blue-800',
    content: (
      <div className="p-3 text-white">
        <div className="text-[8px] mb-3 leading-relaxed opacity-90">
          "Our lead volume tripled within 60 days of the new site going live. Best investment we've made in years."
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[6px] font-bold">RM</div>
          <div>
            <div className="text-[7px] font-medium">Rohan Mehta</div>
            <div className="text-[6px] opacity-70">CEO, Nexus Infra</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'seo',
    bgClass: 'bg-white',
    content: (
      <div className="p-3 space-y-2">
        <div className="text-[8px] font-semibold text-gray-700 mb-1">SEO Growth</div>
        <div className="space-y-1.5">
          {[
            { kw: 'digital marketing agency', pos: '#3', delta: '↑11' },
            { kw: 'web design mumbai', pos: '#1', delta: '↑18' },
            { kw: 'custom software dev', pos: '#4', delta: '↑7' },
          ].map(({ kw, pos, delta }) => (
            <div key={kw} className="flex items-center justify-between">
              <span className="text-[8px] text-gray-500 truncate max-w-[100px]">{kw}</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[8px] font-semibold text-gray-800">{pos}</span>
                <span className="text-[7px] text-emerald-600 font-medium">{delta}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[7px] text-gray-400 pt-1">Organic search · Last 90 days</div>
      </div>
    ),
  },
  {
    id: 'project',
    bgClass: 'bg-slate-900',
    content: (
      <div className="p-3 text-white space-y-2">
        <div className="text-[8px] font-semibold mb-2">Sprint 4 — Website Rebuild</div>
        {[
          { task: 'Homepage design', done: true },
          { task: 'CMS integration', done: true },
          { task: 'SEO meta setup', done: true },
          { task: 'Performance audit', done: false },
        ].map(({ task, done }) => (
          <div key={task} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-sm border flex items-center justify-center shrink-0 ${done ? 'bg-blue-500 border-blue-500' : 'border-white/30'}`}>
              {done && (
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                  <path d="M1 3.5L2.8 5.2L6 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className={`text-[8px] ${done ? 'text-white/50 line-through' : 'text-white/80'}`}>{task}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'chat',
    bgClass: 'bg-gray-50',
    content: (
      <div className="p-3 space-y-2">
        <div className="text-[8px] font-semibold text-gray-700 mb-1">Project Chat</div>
        {[
          { txt: 'Homepage is live! 🎉', left: true, av: 'PS', color: 'bg-blue-500' },
          { txt: 'Looks amazing, thank you!', left: false, av: 'RK', color: 'bg-gray-400' },
          { txt: 'Ads campaign is live too', left: true, av: 'PS', color: 'bg-blue-500' },
          { txt: 'Already seeing traffic 📈', left: false, av: 'RK', color: 'bg-gray-400' },
        ].map((m, i) => (
          <div key={i} className={`flex items-end gap-1.5 ${m.left ? '' : 'flex-row-reverse'}`}>
            <div className={`w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-white text-[5px] font-bold ${m.color}`}>{m.av}</div>
            <div className={`max-w-[78%] rounded-2xl px-2 py-1.5 text-[7px] leading-relaxed ${m.left ? 'bg-white border border-gray-100 text-gray-700' : 'bg-blue-500 text-white'}`}>{m.txt}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'results',
    bgClass: 'bg-white',
    content: (
      <div className="p-3 space-y-2">
        <div className="text-[8px] font-semibold text-gray-700">Client Results</div>
        <div className="text-[6px] text-gray-400 mb-2">Avg. across active accounts</div>
        {[
          { label: 'Conversion rate', before: '1.2%', after: '4.7%' },
          { label: 'Cost per lead', before: '₹680', after: '₹210' },
          { label: 'Organic traffic', before: '800', after: '3.4K' },
        ].map(({ label, before, after }) => (
          <div key={label} className="space-y-0.5">
            <div className="text-[7px] text-gray-500">{label}</div>
            <div className="flex items-center gap-2">
              <span className="text-[7px] text-gray-400 line-through">{before}</span>
              <span className="text-[8px] font-semibold text-gray-900">{after}</span>
              <span className="text-[6px] text-emerald-600 font-medium">↑</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

const SPIN_DISTANCE = 140

function ScrollColumn({
  tiles,
  scrollUp,
  inView,
}: {
  tiles: typeof TILE_CONTENT
  scrollUp: boolean
  inView: boolean
}) {
  const doubled = [...tiles, ...tiles]
  const origin = scrollUp ? 0 : -SPIN_DISTANCE
  const target = scrollUp ? -SPIN_DISTANCE : 0

  return (
    <div className="overflow-hidden flex-1">
      <motion.div
        className="flex flex-col gap-3"
        initial={{ y: origin }}
        animate={inView ? { y: target } : { y: origin }}
        transition={
          inView
            ? { type: 'spring', duration: 2.2, bounce: 0.2 }
            : { duration: 0 }
        }
      >
        {doubled.map((tile, i) => (
          <div
            key={`${tile.id}-${i}`}
            className={[
              'rounded-2xl border border-gray-100 overflow-hidden shrink-0',
              'shadow-[0_2px_12px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)]',
              tile.bgClass,
            ].join(' ')}
          >
            {tile.content}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function ScreenshotMosaic() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })

  const col1 = TILE_CONTENT.slice(0, 3)
  const col2 = TILE_CONTENT.slice(3)

  return (
    <div ref={ref} className="relative h-[480px] overflow-hidden flex gap-3">
      {/* col1 scrolls UP — starts below, rises into place */}
      <ScrollColumn tiles={col1} scrollUp={true}  inView={inView} />
      {/* col2 scrolls DOWN — starts above, falls into place */}
      <ScrollColumn tiles={col2} scrollUp={false} inView={inView} />
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white to-transparent pointer-events-none z-10" />
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
            Turn your digital presence into a growth engine.
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            We partner with ambitious brands to build high-converting websites,
            run revenue-first ad campaigns, and ship custom software — all under
            one roof, with zero hand-offs.
          </p>
          <Button variant="primary" size="lg" asLink href="#">
            Start a project
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
