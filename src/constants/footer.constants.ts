import type { FooterColumn, SocialLink } from '@/types'

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    id: 'pages',
    heading: 'Pages',
    links: [
      { label: 'Products', href: '#' },
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    id: 'socials',
    heading: 'Socials',
    links: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Discord', href: '#' },
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
