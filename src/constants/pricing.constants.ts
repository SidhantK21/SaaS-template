import type { PricingTier } from '@/types'

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 19,
    annualPrice: 15,
    description: 'Perfect for exploring AI agent capabilities',
    ctaLabel: 'Get Started',
    features: [
      { label: '3 AI Agents' },
      { label: '1,000 Task Executions' },
      { label: 'Basic Workflows' },
      { label: 'Email Support' },
      { label: 'API Access' },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 79,
    annualPrice: 63,
    description: 'For teams automating complex workflows',
    ctaLabel: 'Get Started',
    isRecommended: true,
    badge: 'Popular',
    features: [
      { label: 'Unlimited AI Agents' },
      { label: '25,000 Task Executions' },
      { label: 'Advanced Workflows' },
      { label: 'Priority Support' },
      { label: 'API Access' },
    ],
    extraFeatures: [
      { label: 'Autonomous Decision Making' },
      { label: 'Team Collaboration' },
      { label: 'Workflow Orchestration' },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 299,
    annualPrice: 239,
    description: 'For organizations that need full autonomy',
    ctaLabel: 'Get Started',
    features: [
      { label: 'Unlimited AI Agents' },
      { label: 'Unlimited Task Executions' },
      { label: 'Custom Workflow Builder' },
      { label: '24/7 Dedicated Support' },
      { label: 'Dedicated Account Manager' },
    ],
  },
]
