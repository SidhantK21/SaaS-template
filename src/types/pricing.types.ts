export type BillingCycle = 'websites' | 'apps'

export interface PricingFeature {
  readonly label: string
  readonly included: boolean
}

export interface PricingTier {
  readonly id: string
  readonly name: string
  readonly tagline: string
  readonly price: number | 'custom'
  readonly currency?: string
  readonly period: 'one-time' | 'project' | 'month'
  readonly delivers?: string
  readonly ctaLabel: string
  readonly isRecommended?: boolean
  readonly badge?: string
  readonly features: readonly PricingFeature[]
  readonly extraFeatures?: readonly PricingFeature[]
}
