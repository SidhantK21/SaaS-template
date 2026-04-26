import { motion } from 'motion/react'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { FADE_UP, STAGGER } from '@/constants/motion.constants'
import { JOB_LISTINGS } from '@/constants/careers.constants'
import type { JobListing } from '@/constants/careers.constants'

const DEPT_ORDER = ['Engineering', 'Design', 'Marketing', 'Operations']

function JobCard({ job }: { job: JobListing }) {
  return (
    <motion.div
      variants={FADE_UP}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-gray-100 last:border-0"
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold text-gray-900 mb-1">{job.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{job.description}</p>
        <div className="flex items-center gap-3 mt-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 text-gray-600">
            {job.type}
          </span>
          <span className="text-[12px] text-gray-400">{job.location}</span>
        </div>
      </div>
      <a
        href={`mailto:careers@geekstudios.in?subject=Application — ${job.title}`}
        className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
      >
        Apply
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </motion.div>
  )
}

export default function Careers() {
  const departments = DEPT_ORDER.filter(d => JOB_LISTINGS.some(j => j.department === d))

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <SectionWrapper className=" pb-16!">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={STAGGER}
        >
          <motion.h1
            variants={FADE_UP}
            className="text-5xl md:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-5"
          >
            Build the future<br />of digital with us.
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-base text-gray-500 max-w-lg">
            We're a small, ambitious team in Kanpur building websites, apps, and marketing engines for businesses across India and beyond. Come do the best work of your career.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* Perks strip */}
      <SectionWrapper className="py-10!">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-200 rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={STAGGER}
        >
          {[
            { title: 'Remote-friendly',   desc: 'Hybrid and remote roles available' },
            { title: 'Ownership',          desc: 'Work that ships and actually matters' },
            { title: 'Flat structure',     desc: 'No politics, just good work' },
            { title: 'Competitive pay',    desc: 'Market rate + performance bonus' },
          ].map(perk => (
            <motion.div key={perk.title} variants={FADE_UP}>
              <p className="text-[14px] font-semibold text-gray-900 mb-1">{perk.title}</p>
              <p className="text-[13px] text-gray-500">{perk.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Job listings */}
      <SectionWrapper className="flex-1">
        {departments.map(dept => {
          const jobs = JOB_LISTINGS.filter(j => j.department === dept)
          return (
            <div key={dept} className="mb-14 last:mb-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={STAGGER}
              >
                <motion.h2
                  variants={FADE_UP}
                  className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2"
                >
                  {dept}
                </motion.h2>
                <motion.div variants={STAGGER}>
                  {jobs.map(job => <JobCard key={job.id} job={job} />)}
                </motion.div>
              </motion.div>
            </div>
          )
        })}
      </SectionWrapper>

      <Footer />
    </div>
  )
}
