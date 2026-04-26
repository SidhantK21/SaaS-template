import type { FooterColumn, SocialLink } from '@/types'

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    id: 'company',
    heading: 'Company',
    links: [
      { label: 'Products', href: '#' },
      { label: 'Features', href: '#features' },
      { label: 'Careers', href: '#' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    id: 'socials',
    heading: 'Socials',
    links: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Instagram', href: '#'}
    ],
  },
  {
    id: 'legal',
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
  {
    id: 'register',
    heading: 'Register',
    links: [
      { label: 'Get Started', href: '#' },
      { label: 'Login', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
  },
]

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { platform: 'Twitter', href: '#', ariaLabel: 'Follow on Twitter' },
  { platform: 'LinkedIn', href: '#', ariaLabel: 'Connect on LinkedIn' },
]
