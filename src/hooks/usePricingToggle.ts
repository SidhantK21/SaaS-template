import { useState, useCallback } from 'react'
import type { BillingCycle, PricingTier } from '@/types'

interface UsePricingToggleReturn {
  cycle: BillingCycle
  isAnnual: boolean
  toggle: () => void
  getDisplayPrice: (tier: PricingTier) => number
}

export function usePricingToggle(): UsePricingToggleReturn {
  const [cycle, setCycle] = useState<BillingCycle>('monthly')

  const toggle = useCallback(() => {
    setCycle(prev => (prev === 'monthly' ? 'annual' : 'monthly'))
  }, [])

  const getDisplayPrice = useCallback(
    (tier: PricingTier) => (cycle === 'annual' ? tier.annualPrice : tier.monthlyPrice),
    [cycle],
  )

  return { cycle, isAnnual: cycle === 'annual', toggle, getDisplayPrice }
}
