export type BentoColSpan = 1 | 2 | 3
export type BentoRowSpan = 1 | 2

export interface BentoFeature {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly colSpan: BentoColSpan
  readonly rowSpan: BentoRowSpan
  readonly variant: 'auth' | 'security' | 'collab' | 'sdk' | 'analytics'
}
