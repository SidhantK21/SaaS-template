import { useState, useCallback } from 'react'
import type { BillingCycle, PricingTier } from '@/types'

interface UsePricingToggleReturn {
  cycle: BillingCycle
  isAnnual: boolean   // true = apps tab
  toggle: () => void
  getDisplayPrice: (tier: PricingTier) => string
}

export function usePricingToggle(): UsePricingToggleReturn {
  const [cycle, setCycle] = useState<BillingCycle>('websites')

  const toggle = useCallback(() => {
    setCycle(prev => (prev === 'websites' ? 'apps' : 'websites'))
  }, [])

  const getDisplayPrice = useCallback((tier: PricingTier): string => {
    if (tier.price === 'custom') return 'Custom'
    return `$${tier.price.toLocaleString('en-US')}`
  }, [])

  return { cycle, isAnnual: cycle === 'apps', toggle, getDisplayPrice }
}
