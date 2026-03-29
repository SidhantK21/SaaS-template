import type { Variants } from 'motion/react'

const SPRING_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const FADE_UP: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SPRING_EASE } },
}

export const FADE_IN: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export const SCALE_IN: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: SPRING_EASE } },
}

export const STAGGER: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
}
