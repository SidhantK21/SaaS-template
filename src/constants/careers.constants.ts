export interface JobListing {
  id: string
  title: string
  department: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  location: string
  description: string
}

export const JOB_LISTINGS: readonly JobListing[] = [
  {
    id: 'fe-dev',
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'Contract',
    location: 'Remote',
    description:
      'Build fast, accessible UIs in React and Next.js. You care about performance, clean code, and pixel-perfect implementation.',
  },
  {
    id: 'fs-dev',
    title: 'Full-Stack Developer',
    department: 'Engineering',
    type: 'Contract',
    location: 'Remote',
    description:
      'Own features end-to-end — from database schema to deployed UI. Experience with Node.js, REST APIs, and modern frontend frameworks required.',
  },
  {
    id: 'ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote · India',
    description:
      'Design conversion-focused websites and app interfaces in Figma. You understand both aesthetics and user behaviour.',
  },
  {
    id: 'seo-specialist',
    title: 'SEO Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Drive organic growth for our clients. Hands-on with Ahrefs, Google Search Console, technical audits, and content strategy.',
  },
]
