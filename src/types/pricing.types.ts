export type BillingCycle = 'monthly' | 'annual'

export interface PricingFeature {
  readonly label: string
}

export interface PricingTier {
  readonly id: string
  readonly name: string
  readonly monthlyPrice: number
  readonly annualPrice: number
  readonly description: string
  readonly features: readonly PricingFeature[]
  /** Second group shown below the divider (Pro card only) */
  readonly extraFeatures?: readonly PricingFeature[]
  readonly ctaLabel: string
  readonly isRecommended?: boolean
  readonly badge?: string
}
