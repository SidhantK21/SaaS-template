export interface FooterLink {
  readonly label: string
  readonly href: string
}

export interface FooterColumn {
  readonly id: string
  readonly heading: string
  readonly links: readonly FooterLink[]
}

export interface SocialLink {
  readonly platform: string
  readonly href: string
  readonly ariaLabel: string
}
