import type { NavLink } from '@/types'

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Product', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'Contact', href: '#contact' },
]
