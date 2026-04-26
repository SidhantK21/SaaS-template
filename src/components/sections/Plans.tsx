import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { STAGGER, FADE_UP, SCALE_IN } from '@/constants/motion.constants'
import { AGENCY_PLANS, WEBSITE_PLANS, APP_PLANS } from '@/constants/pricing.constants'
import type { PricingTier } from '@/types'

type Tab = 'marketing' | 'websites' | 'apps'

function CheckIcon({ blue }: { blue?: boolean }) {
  return (
    <span className={`w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 ${blue ? 'bg-blue-500' : 'bg-gray-800'}`}>
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
        <path d="M1 4.5l3 3 6-7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

function CrossIcon() {
  return (
    <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 bg-gray-100">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
        <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </span>
  )
}

function PricingCard({ tier }: { tier: PricingTier }) {
  if (tier.isRecommended) {
    return (
      <motion.div variants={SCALE_IN} className="flex flex-col px-6 py-8 border border-gray-200">
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
            {tier.badge && (
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-gray-900 text-white">
                {tier.badge}
              </span>
            )}
          </div>
          <p className="text-base text-gray-500">{tier.tagline}</p>
        </div>

        <a
          href="#"
          className="w-full flex items-center justify-center rounded-xl py-4 mb-8 text-base font-semibold text-white bg-linear-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.25)] transition-all"
        >
          {tier.ctaLabel}
        </a>

        <ul className="space-y-4">
          {tier.features.map(f => (
            <li key={f.label} className="flex items-center gap-3 text-[15px] text-gray-700">
              {f.included ? <CheckIcon /> : <CrossIcon />}
              <span className={f.included ? '' : 'text-gray-400'}>{f.label}</span>
            </li>
          ))}
        </ul>

        {tier.extraFeatures && tier.extraFeatures.length > 0 && (
          <>
            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 border-t border-gray-200" />
              <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-sm leading-none">+</div>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <ul className="space-y-4">
              {tier.extraFeatures.map(f => (
                <li key={f.label} className="flex items-center gap-3 text-[15px] text-gray-700">
                  <CheckIcon blue />
                  {f.label}
                </li>
              ))}
            </ul>
          </>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div variants={SCALE_IN} className="flex flex-col px-6 py-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-[15px] font-semibold text-gray-900">{tier.name}</h3>
          {tier.badge && <Badge label={tier.badge} variant="dark" />}
        </div>
        <p className="text-sm text-gray-500">{tier.tagline}</p>
      </div>

      <Button variant="outline" size="lg" asLink href="#" className="w-full justify-center mb-8">
        {tier.ctaLabel}
      </Button>

      <ul className="space-y-4">
        {tier.features.map(f => (
          <li key={f.label} className="flex items-center gap-3 text-[15px] text-gray-700">
            {f.included ? <CheckIcon /> : <CrossIcon />}
            <span className={f.included ? '' : 'text-gray-400'}>{f.label}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function TabButton({ active, layoutId, onClick, children }: {
  active: boolean
  layoutId: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative px-4 py-1.5 rounded-lg text-sm font-medium"
    >
      {active && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 bg-white rounded-lg shadow border border-gray-200"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <span className={`relative z-10 transition-colors ${active ? 'text-gray-900' : 'text-gray-500'}`}>
        {children}
      </span>
    </button>
  )
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'websites',  label: 'Websites'          },
  { id: 'apps',      label: 'MVPs & Software'   },
]

export function Pricing() {
  const [tab, setTab] = useState<Tab>('marketing')

  const plans =
    tab === 'marketing' ? AGENCY_PLANS
    : tab === 'websites' ? WEBSITE_PLANS
    : APP_PLANS

  return (
    <SectionWrapper id="pricing" className="bg-white">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_UP}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-4">
          Simple, Transparent<br />Plans
        </h2>
        <p className="text-base text-gray-500 mb-8">
          Choose a plan that works best for you and your team.<br />
          No hidden fees.
        </p>

        {/* Single flat tab bar */}
        <div className="inline-flex items-center bg-gray-100 rounded-xl p-1">
          {TABS.map(({ id, label }) => (
            <TabButton key={id} active={tab === id} layoutId="tab-pill" onClick={() => setTab(id)}>
              {label}
            </TabButton>
          ))}
        </div>
      </motion.div>

      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 lg:px-8"
            variants={STAGGER}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {plans.map(tier => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}


