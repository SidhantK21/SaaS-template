import { useState, useCallback } from 'react'

interface UseAccordionReturn {
  openId: string | null
  toggle: (id: string) => void
  isOpen: (id: string) => boolean
}

export function useAccordion(): UseAccordionReturn {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = useCallback((id: string) => {
    setOpenId(prev => (prev === id ? null : id))
  }, [])

  const isOpen = useCallback((id: string) => openId === id, [openId])

  return { openId, toggle, isOpen }
}
