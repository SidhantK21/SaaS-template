import { useState, useRef, useEffect, type PointerEvent } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import { LogoMark, ChevronDown, Menu, Close } from '@/components/ui/Icons'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/constants/nav.constants'

const RESOURCES_LINKS = [
  { label: 'Blog',          href: '#' },
  { label: 'Documentation', href: '#' },
  { label: 'Help Center',   href: '#' },
  { label: 'Changelog',     href: '#' },
  { label: 'Tutorials',     href: '#' },
]

function ResourcesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0,  scale: 1    }}
      exit={{    opacity: 0, y: 6,  scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] z-50
                 w-[420px] rounded-2xl border border-gray-200 bg-white shadow-xl p-3
                 flex gap-3"
    >
      {/* Left: links */}
      <div className="flex flex-col gap-0.5 w-[160px] shrink-0">
        {RESOURCES_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="px-3 py-2 rounded-lg text-[13.5px] font-medium text-gray-700
                       hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right: featured card */}
      <div className="flex-1 flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-3 min-w-0">
        <p className="text-[12px] text-gray-500 leading-snug mb-2">
          Multi-agent orchestration is now available.
        </p>

        {/* Changelog preview mockup */}
        <div className="flex-1 rounded-lg border border-gray-200 bg-white p-2 mb-3 overflow-hidden">
          <div className="flex flex-col gap-1.5">
            <div className="h-1.5 w-8 bg-gray-900 rounded-full self-center" />
            <div className="grid grid-cols-2 gap-1.5 mt-1">
              {[0,1,2,3].map(i => (
                <div key={i} className="rounded border border-gray-100 bg-gray-50 h-10 flex flex-col gap-1 p-1.5">
                  <div className="h-1 w-full bg-gray-200 rounded-full" />
                  <div className="h-1 w-3/4 bg-gray-200 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#" className="text-[12px] font-medium text-blue-500 hover:text-blue-600 transition-colors">
          See changelog →
        </a>
      </div>
    </motion.div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const resourcesRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const bg      = useTransform(scrollY, [0, 60], ['rgba(255,255,255,0)',    'rgba(255,255,255,0.96)'])
  const shadow  = useTransform(scrollY, [0, 60], ['0 0 0 0 rgba(0,0,0,0)', '0 4px 24px 0 rgba(0,0,0,0.07)'])
  const borderO = useTransform(scrollY, [0, 60], [0, 1])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="sticky top-0 z-50 px-4 pt-3 pb-1">
      <motion.nav
        className="relative mx-auto max-w-7xl rounded-2xl backdrop-blur-md"
        style={{ backgroundColor: bg, boxShadow: shadow }}
      >
        {/* Border overlay — fades in on scroll instead of animating borderColor */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"
          style={{ opacity: borderO }}
        />
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <LogoMark />
            <span className="text-[15px] font-semibold tracking-tight text-gray-900">GeekStudios</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center">
            {NAV_LINKS.map((link, idx) => (
              link.hasDropdown ? (
                <div key={link.label} ref={resourcesRef} className="relative">
                  <button
                    type="button"
                    onPointerEnter={(e: PointerEvent<HTMLButtonElement>) => { if (e.pointerType === 'mouse') setHovered(idx) }}
                    onPointerLeave={(e: PointerEvent<HTMLButtonElement>) => { if (e.pointerType === 'mouse') setHovered(null) }}
                    onClick={() => setResourcesOpen(o => !o)}
                    className="relative flex items-center gap-1 px-3 py-1.5 text-[13.5px] text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {hovered === idx && (
                      <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 rounded-md bg-gray-100"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    <motion.span
                      animate={{ rotate: resourcesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 text-gray-400"
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {resourcesOpen && <ResourcesDropdown />}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onPointerEnter={(e: PointerEvent<HTMLAnchorElement>) => { if (e.pointerType === 'mouse') setHovered(idx) }}
                  onPointerLeave={(e: PointerEvent<HTMLAnchorElement>) => { if (e.pointerType === 'mouse') setHovered(null) }}
                  className="relative flex items-center gap-1 px-3 py-1.5 text-[13.5px] text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {hovered === idx && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-md bg-gray-100"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-5 rounded-lg border border-blue-500">
            <Button variant="primary" size="sm" asLink href="#">
              Pre-built Templates
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-gray-600 hover:text-gray-900 p-1"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 px-5 pb-4 pt-3 space-y-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="block px-2 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 mt-2">
              <Link to="/login" className="px-2 py-2 text-sm text-gray-600">Login</Link>
              <Button variant="primary" size="md" asLink href="#" className="w-full justify-center">
                Try for free
              </Button>
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  )
}
