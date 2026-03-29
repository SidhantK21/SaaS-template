import type { FAQItem } from '@/types'

export const FAQ_ITEMS: readonly FAQItem[] = [
  {
    id: 'cost',
    category: 'Pricing',
    question: 'How much does it cost to deploy AI agents?',
    answer:
      'We offer three plans starting at $19/month. Each plan includes a different number of AI agents and task executions. You can view full pricing details above.',
  },
  {
    id: 'trial',
    category: 'Pricing',
    question: 'Is there a free trial available?',
    answer:
      'Yes, all plans come with a 14-day free trial. No credit card required. You can explore all features before committing to a plan.',
  },
  {
    id: 'limits',
    category: 'Pricing',
    question: 'What happens if I exceed my plan limits?',
    answer:
      'We will notify you when you approach your plan limits. You can upgrade your plan at any time or purchase additional task executions as needed.',
  },
  {
    id: 'change',
    category: 'Pricing',
    question: 'Can I change plans at any time?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated for the current billing period.',
  },
  {
    id: 'refund',
    category: 'Pricing',
    question: 'Do you offer refunds?',
    answer:
      'Yes, we offer a 30-day money-back guarantee on all plans. If you are not satisfied, contact our support team for a full refund.',
  },
  {
    id: 'automate',
    category: 'Agents',
    question: 'What can AI agents automate?',
    answer:
      'AI agents can automate a wide range of tasks including data processing, API orchestration, customer support workflows, code review, report generation, and more.',
  },
  {
    id: 'setup',
    category: 'Agents',
    question: 'How long does it take to deploy an agent?',
    answer:
      'Most agents can be configured and deployed in minutes using our visual workflow builder. Complex enterprise workflows may take a few hours to set up.',
  },
  {
    id: 'security-agents',
    category: 'Agents',
    question: 'Are my agent workflows secure?',
    answer:
      'All workflows run in isolated, encrypted environments. We are SOC 2 Type II certified and GDPR compliant. Your data never leaves your chosen region.',
  },
]
