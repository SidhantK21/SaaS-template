import type { BentoFeature } from '@/types'

export const BENTO_FEATURES: readonly BentoFeature[] = [
  {
    id: 'auth',
    title: 'Easy auth setup',
    description: 'Get started in minutes with our simple authentication flow.',
    colSpan: 1,
    rowSpan: 2,
    variant: 'auth',
  },
  {
    id: 'security',
    title: "You're secure, everywhere",
    description:
      'Enterprise-grade security that follows your users across the globe. Built-in encryption, compliance, and monitoring.',
    colSpan: 1,
    rowSpan: 1,
    variant: 'security',
  },
  {
    id: 'collab',
    title: 'Real-time collaboration',
    description:
      'Connect with your team instantly. AI-powered insights help you work smarter together.',
    colSpan: 1,
    rowSpan: 1,
    variant: 'collab',
  },
  {
    id: 'sdk',
    title: 'SDK available for everything',
    description: 'Native SDKs for every platform. React, Vue, iOS, Android, and more.',
    colSpan: 1,
    rowSpan: 1,
    variant: 'sdk',
  },
  {
    id: 'analytics',
    title: 'Built-in analytics',
    description: 'Track performance, monitor usage, and gain actionable insights in real time.',
    colSpan: 1,
    rowSpan: 1,
    variant: 'analytics',
  },
]

export const MINI_FEATURES = [
  {
    id: 'dev',
    iconVariant: 'lightning' as const,
    title: 'Web & App Development',
    description:
      'From a five-page business site to a full-stack mobile app — we build fast, scalable, and handover everything to you.',
  },
  {
    id: 'marketing',
    iconVariant: 'chart' as const,
    title: 'Digital Marketing',
    description:
      'SEO, Google Ads, and Meta Ads managed for leads and revenue — not impressions. Every rupee of ad spend is yours, with zero markup.',
  },
  {
    id: 'partner',
    iconVariant: 'puzzle' as const,
    title: 'One Partner, Full Stack',
    description:
      'Design, development, and marketing under one roof. No hand-offs, no gaps, no agency blame-game.',
  },
]
