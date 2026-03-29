import type { HTMLAttributes, ReactNode, ElementType } from 'react'

type CardVariant = 'bordered' | 'elevated' | 'flat'
type CardPadding = 'none' | 'sm' | 'md' | 'lg'

interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: CardVariant
  padding?: CardPadding
  as?: ElementType
  children: ReactNode
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  bordered: 'border border-gray-200 bg-white',
  elevated: 'bg-white shadow-[var(--shadow-card)]',
  flat:     'bg-gray-50',
}

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
}

export function Card({
  variant = 'bordered',
  padding = 'md',
  as: Tag = 'div',
  children,
  className = '',
  ...rest
}: CardProps) {
  return (
    <Tag
      className={[
        'rounded-[var(--radius-card)] overflow-hidden',
        VARIANT_CLASSES[variant],
        PADDING_CLASSES[padding],
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}
