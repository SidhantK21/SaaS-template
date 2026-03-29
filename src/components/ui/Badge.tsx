type BadgeVariant = 'default' | 'brand' | 'dark' | 'muted'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  className?: string
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  brand:   'bg-brand-100 text-brand-700',
  dark:    'bg-gray-900 text-white',
  muted:   'bg-gray-50 text-gray-500 border border-gray-200',
}

export function Badge({ label, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        VARIANT_CLASSES[variant],
        className,
      ].join(' ')}
    >
      {label}
    </span>
  )
}
