import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  asLink?: boolean
  href?: string
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:   'bg-linear-to-b from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.25)]',
  secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50',
  outline:   'bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-50',
  ghost:     'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm:  'px-3.5 py-1.5 text-[13px]',
  md:  'px-5 py-2 text-sm',
  lg:  'px-6 py-2.5 text-[15px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  asLink,
  href,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(' ')

  if (asLink && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
