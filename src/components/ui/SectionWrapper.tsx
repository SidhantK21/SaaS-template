import type { ReactNode, ElementType, HTMLAttributes } from 'react'

type ContainerWidth = 'default' | 'wide' | 'narrow' | 'full'

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  id?: string
  as?: ElementType
  containerWidth?: ContainerWidth
  className?: string
  innerClassName?: string
}

const WIDTH_CLASSES: Record<ContainerWidth, string> = {
  narrow:  'max-w-3xl',
  default: 'max-w-7xl',
  wide:    'max-w-screen-2xl',
  full:    'max-w-none',
}

export function SectionWrapper({
  children,
  id,
  as: Tag = 'section',
  containerWidth = 'default',
  className = '',
  innerClassName = '',
  ...rest
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={['py-16 md:py-24', className].join(' ')} {...rest}>
      <div className={['mx-auto px-4 sm:px-6 lg:px-8', WIDTH_CLASSES[containerWidth], innerClassName].join(' ')}>
        {children}
      </div>
    </Tag>
  )
}
