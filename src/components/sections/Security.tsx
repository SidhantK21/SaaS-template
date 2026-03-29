import { motion } from "motion/react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { STAGGER, SCALE_IN } from "@/constants/motion.constants";

function SecurityVisual() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-xl">
      {/* Diagonal stripe background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="diag-stripes"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              stroke="#e5e7eb"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-stripes)" />
      </svg>

      {/* Content row — centered */}
      <div className="absolute inset-0 flex items-center justify-center gap-0">
        <div className="flex items-center w-[70%]">
          {/* Left avatar */}
          <div className="w-11 h-11 rounded-full bg-linear-to-br from-slate-400 to-slate-600 border-2 border-white shadow-md shrink-0 overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              className="w-full h-full opacity-80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="16" r="8" fill="#94a3b8" />
              <ellipse cx="20" cy="34" rx="14" ry="10" fill="#64748b" />
            </svg>
          </div>

          {/* Dashed line left → lock */}
          <svg className="flex-1 h-px overflow-visible" style={{ minWidth: 0 }}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#93c5fd"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
          </svg>

          {/* Lock card */}
          <div className="w-12 h-12 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 mx-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          {/* Dashed line lock → right */}
          <svg className="flex-1 h-px overflow-visible" style={{ minWidth: 0 }}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#d1d5db"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
          </svg>

          {/* Right avatar */}
          <div className="w-11 h-11 rounded-full bg-linear-to-br from-rose-300 to-rose-500 border-2 border-white shadow-md shrink-0 overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              className="w-full h-full opacity-80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="16" r="8" fill="#fca5a5" />
              <ellipse cx="20" cy="34" rx="14" ry="10" fill="#f87171" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorldMapVisual() {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-xl">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 210, center: [10, 12] }}
        width={800}
        height={420}
        style={{ width: "100%", height: "140%", marginTop: "-20px" }}
      >
        <defs>
          <pattern
            id="sec-map-dot"
            x="0"
            y="0"
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.4" fill="#d1d5db" />
          </pattern>
        </defs>
        <Geographies geography="/world-110m.json">
          {({ geographies }: { geographies: { rsmKey: string }[] }) =>
            geographies.map((geo: { rsmKey: string }) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#sec-map-dot)"
                stroke="none"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      {/* Fade all edges */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}

function ComplianceVisual() {
  return (
    <div className="flex items-center justify-center gap-4 h-44">
      {/* GDPR */}
      <div className="w-16 h-16 rounded-full bg-[#1a3a6b] flex flex-col items-center justify-center shadow-md shrink-0">
        <svg viewBox="0 0 40 40" width="36" height="36">
          {/* EU stars in a circle */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x = 20 + 12 * Math.cos(angle)
            const y = 20 + 12 * Math.sin(angle)
            return <polygon key={i} points={`${x},${y-2} ${x+1},${y+1} ${x-2},${y-0.5} ${x+2},${y-0.5} ${x-1},${y+1}`} fill="#FFD700" />
          })}
          <text x="20" y="24" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="sans-serif">GDPR</text>
        </svg>
      </div>

      {/* ISO */}
      <div className="w-16 h-16 rounded-full bg-brand-600 flex flex-col items-center justify-center shadow-md shrink-0">
        <svg viewBox="0 0 40 40" width="36" height="36">
          {/* Globe lines */}
          <circle cx="20" cy="20" r="11" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" />
          <ellipse cx="20" cy="20" rx="6" ry="11" fill="none" stroke="white" strokeWidth="1.2" opacity="0.7" />
          <line x1="9" y1="20" x2="31" y2="20" stroke="white" strokeWidth="1.2" opacity="0.7" />
          <line x1="11" y1="14" x2="29" y2="14" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="11" y1="26" x2="29" y2="26" stroke="white" strokeWidth="1" opacity="0.5" />
          <text x="20" y="37" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="white" fontFamily="sans-serif">ISO</text>
        </svg>
      </div>

      {/* AICPA SOC */}
      <div className="w-16 h-16 rounded-full bg-brand-400 flex flex-col items-center justify-center shadow-md shrink-0">
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="20" cy="17" r="9" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85" />
          <text x="20" y="21" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="white" fontFamily="sans-serif">SOC</text>
          <text x="20" y="33" textAnchor="middle" fontSize="4.5" fill="white" fontFamily="sans-serif" opacity="0.9">AICPA</text>
        </svg>
      </div>
    </div>
  )
}

const SECURITY_CARDS = [
  {
    id: "ent",
    title: "Enterprise-grade security",
    desc: "End-to-end encryption and SOC 2 compliance ensure your agent data stays protected across all devices.",
    Visual: SecurityVisual,
  },
  {
    id: "edge",
    title: "Edge computing ready",
    desc: "Deploy agents closer to your users with our global edge network for ultra-low latency responses.",
    Visual: WorldMapVisual,
  },
  {
    id: "soc",
    title: "SOC2 and HIPAA compliant",
    desc: "Built-in encryption and compliance features ensure your agent data stays protected across all devices.",
    Visual: ComplianceVisual,
  },
];

export function Security() {
  return (
    <SectionWrapper className="bg-white pt-8!">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SECURITY_CARDS.map(({ id, title, desc, Visual }) => (
          <motion.div key={id} variants={SCALE_IN}>
            <Card variant="bordered" padding="md" className="h-full">
              <Visual />
              <div className="mt-4 border-t border-gray-100 pt-4">
                <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
