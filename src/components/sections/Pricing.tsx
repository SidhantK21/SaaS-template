import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { STAGGER, FADE_UP, SCALE_IN } from '@/constants/motion.constants'
import { PRICING_TIERS } from '@/constants/pricing.constants'
import { usePricingToggle } from '@/hooks/usePricingToggle'

export function Pricing() {
  const { cycle, isAnnual, toggle, getDisplayPrice } = usePricingToggle()

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
          Simple, Transparent<br />Pricing
        </h2>
        <p className="text-base text-gray-500 mb-8">
          Choose a plan that works best for you and your team.<br />
          No hidden fees.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
          <button
            onClick={toggle}
            className={['px-4 py-1.5 rounded-full text-sm font-medium transition-all', !isAnnual ? 'bg-white shadow text-gray-900' : 'text-gray-500'].join(' ')}
          >
            Monthly
          </button>
          <button
            onClick={toggle}
            className={['px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2', isAnnual ? 'bg-white shadow text-gray-900' : 'text-gray-500'].join(' ')}
          >
            Annual
            {isAnnual && <Badge label="Save 20%" variant="brand" />}
          </button>
        </div>
        <span className="sr-only">{cycle}</span>
      </motion.div>

      {/* Breakout wrapper */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 lg:px-8   divide-dashed divide-gray-300"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PRICING_TIERS.map((tier, _i) => (
            tier.isRecommended ? (

              /* ── Pro / recommended card ── */
              <motion.div
                key={tier.id}
                variants={SCALE_IN}
                className="flex flex-col px-6 py-8 border border-gray-200"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    {tier.badge && (
                      <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-gray-900 text-white">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-base text-gray-500">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-6xl font-normal text-gray-900 tracking-tight leading-none">
                    ${getDisplayPrice(tier)}
                  </span>
                  <p className="text-base text-gray-400 mt-2">per month</p>
                </div>

                {/* CTA — blue gradient */}
                <a
                  href="#"
                  className="w-full flex items-center justify-center rounded-xl py-4 mb-8 text-base font-semibold text-white bg-linear-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.25)] transition-all"
                >
                  {tier.ctaLabel}
                </a>

                {/* Features — dark checkmarks */}
                <ul className="space-y-4">
                  {tier.features.map(f => (
                    <li key={f.label} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <span className="w-[22px] h-[22px] rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
                          <path d="M1 4.5l3 3 6-7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                {/* Divider with + */}
                {tier.extraFeatures && tier.extraFeatures.length > 0 && (
                  <>
                    <div className="flex items-center gap-4 my-5">
                      <div className="flex-1 border-t border-gray-200" />
                      <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-sm leading-none">+</div>
                      <div className="flex-1 border-t border-gray-200" />
                    </div>

                    {/* Extra features — blue checkmarks */}
                    <ul className="space-y-4">
                      {tier.extraFeatures.map(f => (
                        <li key={f.label} className="flex items-center gap-3 text-[15px] text-gray-700">
                          <span className="w-[22px] h-[22px] rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
                              <path d="M1 4.5l3 3 6-7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {f.label}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>

            ) : (

              /* ── Standard card ── */
              <motion.div
                key={tier.id}
                variants={SCALE_IN}
                className={`flex flex-col px-6 py-8 ${tier.extraFeatures && tier.extraFeatures.length > 0 ? 'rounded-2xl' : ''}`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-[15px] font-semibold text-gray-900">{tier.name}</h3>
                    {tier.badge && <Badge label={tier.badge} variant="dark" />}
                  </div>
                  <p className="text-sm text-gray-500">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-normal text-gray-900 tracking-tight">
                    ${getDisplayPrice(tier)}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">per month</p>
                </div>

                {/* CTA */}
                <Button variant="outline" size="lg" asLink href="#" className="w-full justify-center mb-8">
                  {tier.ctaLabel}
                </Button>

                {/* Features — dark checkmarks */}
                <ul className="space-y-4">
                  {tier.features.map(f => (
                    <li key={f.label} className="flex items-center gap-3 text-[15px] text-gray-700">
                      <span className="w-[22px] h-[22px] rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
                          <path d="M1 4.5l3 3 6-7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                {/* Divider with + */}
                {tier.extraFeatures && tier.extraFeatures.length > 0 && (
                  <>
                    <div className="flex items-center gap-4 my-5">
                      <div className="flex-1 border-t border-gray-200" />
                      <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-sm leading-none">+</div>
                      <div className="flex-1 border-t border-gray-200" />
                    </div>

                    {/* Extra features — blue checkmarks */}
                    <ul className="space-y-4">
                      {tier.extraFeatures.map(f => (
                        <li key={f.label} className="flex items-center gap-3 text-[15px] text-gray-700">
                          <span className="w-[22px] h-[22px] rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
                              <path d="M1 4.5l3 3 6-7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {f.label}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>

            )
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}