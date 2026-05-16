import { motion } from 'motion/react'
import { FADE_UP, STAGGER, FADE_IN } from '@/constants/motion.constants'

// Replace with your Logo.dev token from https://logo.dev
const LOGO_DEV_TOKEN = 'pk_JP50tcEERzagas9Bkl48xA'

const LOGOS: readonly { name: string; domain: string }[] = [
  { name: 'Razorpay',        domain: 'razorpay.com'       },
  { name: 'Swiggy',          domain: 'swiggy.com'          },
  { name: 'Nykaa',           domain: 'nykaa.com'           },
  { name: 'Meesho',          domain: 'meesho.com'          },
  { name: 'Urban Company',   domain: 'urbancompany.com'    },
  { name: 'Groww',           domain: 'groww.in'            },
  { name: 'Zomato',          domain: 'zomato.com'          },
  { name: 'Practo',          domain: 'practo.com'          },
  { name: 'Unacademy',       domain: 'unacademy.com'       },
  { name: 'CRED',            domain: 'cred.club'           },
  { name: 'Zerodha',         domain: 'zerodha.com'         },
  { name: 'Ola',             domain: 'olacabs.com'         },
]

export function TrustedBy() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={FADE_UP}
        >
          <p className="text-[20px] font-normal text-gray-900 tracking-tight mb-1">Trusted by ambitious brands across world.</p>
          <p className="text-[21px] font-normal tracking-tight leading-4 text-gray-400">From early-stage startups to market leaders.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-8"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LOGOS.map(logo => (
            <motion.div
              key={logo.domain}
              variants={FADE_IN}
              className="flex items-center justify-center"
            >
              <img
                src={`https://img.logo.dev/${logo.domain}?token=${LOGO_DEV_TOKEN}&size=80&format=png`}
                alt={logo.name}
                width={80}
                height={80}
                className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
