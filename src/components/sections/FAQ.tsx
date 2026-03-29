import { motion, AnimatePresence } from 'motion/react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Plus } from '@/components/ui/Icons'
import { FADE_UP, STAGGER } from '@/constants/motion.constants'
import { FAQ_ITEMS } from '@/constants/faq.constants'
import { useAccordion } from '@/hooks/useAccordion'

export function FAQ() {
  const { toggle, isOpen } = useAccordion()

  /* Group by category preserving order */
  const categories = FAQ_ITEMS.reduce<string[]>((acc, item) => {
    if (!acc.includes(item.category)) acc.push(item.category)
    return acc
  }, [])

  return (
    <SectionWrapper className="bg-white pt-9!">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_UP}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-gray-500 max-w-lg mx-auto">
          Everything you need to know about deploying AI agents and automating your workflows.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {categories.map(cat => {
          const items = FAQ_ITEMS.filter(f => f.category === cat)
          return (
            <motion.div key={cat} variants={FADE_UP} className="mb-10">
              <h3 className="text-sm font-semibold text-gray-500 mb-4">{cat}</h3>
              <div className="divide-y divide-gray-100">
                {items.map(item => (
                  <div key={item.id} className="py-4">
                    <button
                      className="w-full flex items-center justify-between gap-4 text-left group"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen(item.id)}
                    >
                      <span className="text-[15px] text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen(item.id) ? 45 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        className="text-gray-400 shrink-0 group-hover:text-gray-600 transition-colors flex items-center"
                      >
                        <Plus size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen(item.id) && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm text-gray-500 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
