/* Named SVG icon components — single source for all icons in the app */

interface IconProps {
  className?: string
  size?: number
}

const iconBase = (size: number | undefined) => ({
  width: size ?? 20,
  height: size ?? 20,
  viewBox: '0 0 20 20',
  fill: 'none',
  'aria-hidden': true as const,
})

export const LogoMark = ({ size }: IconProps) => (
  <svg width={size ?? 28} height={size ?? 28} viewBox="0 0 28 28" fill="none" aria-hidden>
    <rect width="28" height="28" rx="6" fill="#111827" />
    <path d="M14 5L21.5 21H6.5L14 5Z" fill="white" />
    <line x1="10" y1="16" x2="18" y2="16" stroke="#111827" strokeWidth="2.5" />
  </svg>
)

export const ChevronDown = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Menu = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const Close = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const ArrowRight = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CheckCircle = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 10L9 12.5L13.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Plus = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const Minus = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const Lightning = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M11 3L5 11H10L9 17L15 9H10L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const BarChart = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <rect x="3" y="12" width="3" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8.5" y="8" width="3" height="9" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="14" y="4" width="3" height="13" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export const Puzzle = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M8 3H5C3.9 3 3 3.9 3 5V8H5C6.1 8 7 8.9 7 10C7 11.1 6.1 12 5 12H3V15C3 16.1 3.9 17 5 17H8V15C8 13.9 8.9 13 10 13C11.1 13 12 13.9 12 15V17H15C16.1 17 17 16.1 17 15V12H15C13.9 12 13 11.1 13 10C13 8.9 13.9 8 15 8H17V5C17 3.9 16.1 3 15 3H12V5C12 6.1 11.1 7 10 7C8.9 7 8 6.1 8 5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Twitter = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className} viewBox="0 0 20 20">
    <path d="M15.751 3H18.18l-5.172 5.913L19 17h-4.763l-3.73-4.877L6.38 17H3.95l5.532-6.325L3 3h4.887l3.372 4.408L15.751 3ZM14.9 15.52h1.344L8.156 4.376H6.71L14.9 15.52Z" fill="currentColor" />
  </svg>
)

export const LinkedIn = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className} viewBox="0 0 20 20">
    <path d="M16.667 2H3.333A1.333 1.333 0 0 0 2 3.333v13.334A1.333 1.333 0 0 0 3.333 18h13.334A1.333 1.333 0 0 0 18 16.667V3.333A1.333 1.333 0 0 0 16.667 2ZM7 15H4.5V8H7v7ZM5.75 6.875a1.375 1.375 0 1 1 0-2.75 1.375 1.375 0 0 1 0 2.75ZM15.5 15H13v-3.5c0-.966-.784-1.75-1.75-1.75S9.5 10.534 9.5 11.5V15H7V8h2.5v1.05A3.24 3.24 0 0 1 12 7.75c1.933 0 3.5 1.567 3.5 3.5V15Z" fill="currentColor" />
  </svg>
)

export const GitHub = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className} viewBox="0 0 20 20">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 2a8 8 0 0 0-2.529 15.591c.4.074.546-.174.546-.386 0-.19-.007-.693-.01-1.36-2.226.484-2.695-1.073-2.695-1.073-.364-.924-.889-1.17-.889-1.17-.727-.497.055-.487.055-.487.803.057 1.226.825 1.226.825.714 1.223 1.873.87 2.328.665.073-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.874.312-1.588.823-2.147-.082-.202-.357-1.016.078-2.117 0 0 .672-.215 2.2.82A7.662 7.662 0 0 1 10 5.958c.68.003 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.436 1.101.162 1.915.08 2.117.512.56.822 1.273.822 2.147 0 3.073-1.871 3.75-3.653 3.948.287.248.543.735.543 1.481 0 1.07-.01 1.932-.01 2.195 0 .214.144.463.55.385A8.001 8.001 0 0 0 10 2Z" fill="currentColor" />
  </svg>
)

export const YouTube = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className} viewBox="0 0 20 20">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.44 5.68a2.133 2.133 0 0 0-1.502-1.51C14.63 3.89 10 3.89 10 3.89s-4.63 0-5.938.28A2.133 2.133 0 0 0 2.56 5.68C2.28 6.993 2.28 10 2.28 10s0 3.007.28 4.32a2.133 2.133 0 0 0 1.502 1.51C5.37 16.11 10 16.11 10 16.11s4.63 0 5.938-.28a2.133 2.133 0 0 0 1.502-1.51c.28-1.313.28-4.32.28-4.32s0-3.007-.28-4.32ZM8.3 12.5V7.5l4.4 2.5-4.4 2.5Z" fill="currentColor" />
  </svg>
)

export const Moon = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M17.5 13.5C16.3 14.2 14.9 14.5 13.5 14.5C9.4 14.5 6 11.1 6 7C6 5.6 6.4 4.2 7.1 3C4.6 4.1 3 6.4 3 9.5C3 13.6 6.4 17 10.5 17C13.6 17 15.9 15.4 17.5 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Lock = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <rect x="5" y="9" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 9V6.5C7 4.6 8.6 3 10.5 3V3C12.4 3 14 4.6 14 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const Globe = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 2.5C10 2.5 7 6 7 10C7 14 10 17.5 10 17.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 2.5C10 2.5 13 6 13 10C13 14 10 17.5 10 17.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.5 6.5H16.5M3.5 13.5H16.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

export const Shield = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <path d="M10 2.5L17 5.5V10.5C17 14 13.5 17 10 18C6.5 17 3 14 3 10.5V5.5L10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Phone = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <rect x="6" y="2" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9.5 15.5H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 14H14" stroke="currentColor" strokeWidth="1" />
  </svg>
)

export const Laptop = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <rect x="3" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7.5 16L8.5 14H11.5L12.5 16" stroke="currentColor" strokeWidth="1" />
  </svg>
)

export const Tablet = ({ className, size }: IconProps) => (
  <svg {...iconBase(size)} className={className}>
    <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 14.5H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
