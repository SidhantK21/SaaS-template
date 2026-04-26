import type { FAQItem } from '@/types'

export const FAQ_ITEMS: readonly FAQItem[] = [
  {
    id: 'gen-1',
    category: 'General',
    question: 'What exactly does your agency do?',
    answer:
      'We are a software engineering and digital marketing agency based in Kanpur, India. ' +
      'We build websites, web apps, and mobile apps — and we grow them through SEO, Google Ads, ' +
      'and Meta Ads. Most agencies do one or the other. We do both, so you only need one partner.',
  },
  {
    id: 'price-2',
    category: 'Pricing',
    question: 'What are your payment terms?',
    answer:
      'We take 50% upfront before work begins and the remaining 50% on delivery. ' +
      'For monthly retainers, we invoice on the 1st of each month. ' +
      'We accept bank transfer, UPI, Razorpay, and international wire.',
  },
  {
    id: 'price-3',
    category: 'Pricing',
    question: 'Is the initial discovery call free?',
    answer:
      'Yes — a 15-minute discovery call is completely free. We use it to understand ' +
      'your goals and tell you honestly whether we are the right fit.',
  },
  {
    id: 'proc-4',
    category: 'Process',
    question: 'Will I own everything at the end — code, accounts, files?',
    answer:
      'Yes, 100%. All source code, design files, ad accounts, and analytics are in your ' +
      'name and stay with you. If you ever leave, you walk away with everything.',
  },
  {
    id: 'mkt-1',
    category: 'Marketing',
    question: 'How long before I see SEO results?',
    answer:
      'You will typically see measurable movement in keyword rankings within 60–90 days, ' +
      'and meaningful traffic growth within 4–6 months. Anyone promising results in 2 weeks is misleading you.',
  },
  {
    id: 'dev-1',
    category: 'Development',
    question: 'How long does a typical project take?',
    answer:
      'A basic website is delivered in 7–10 working days. A custom business website takes 14–21 days. ' +
      'An e-commerce store takes 21–30 days. Timelines start after design is approved and payment is received.',
  },
  {
    id: 'dev-6',
    category: 'Development',
    question: 'What happens after launch?',
    answer:
      'All projects include a post-launch support period — 1 month for websites, 3 months for custom software. ' +
      'We fix any bugs at no extra charge during that window.',
  },
]
