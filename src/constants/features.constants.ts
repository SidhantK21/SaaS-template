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
    id: 'deploy',
    iconVariant: 'lightning' as const,
    title: 'Lightning-fast deployments',
    description:
      'Push to production in seconds. Our CI/CD pipeline handles builds, tests, and rollbacks automatically.',
  },
  {
    id: 'analytics',
    iconVariant: 'chart' as const,
    title: 'Built-in analytics',
    description:
      'Track user behavior, monitor performance, and gain actionable insights without third-party tools.',
  },
  {
    id: 'integrations',
    iconVariant: 'puzzle' as const,
    title: 'Seamless integrations',
    description:
      'Connect with your existing stack. Slack, GitHub, Jira, and 100+ integrations out of the box.',
  },
]
