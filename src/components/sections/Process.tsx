import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FADE_UP, STAGGER, SCALE_IN } from "@/constants/motion.constants";
import { Lightning, BarChart, Puzzle } from "@/components/ui/Icons";
import { MINI_FEATURES } from "@/constants/features.constants";

const ICON_MAP = {
  lightning: Lightning,
  chart: BarChart,
  puzzle: Puzzle,
} as const;

/* ─── Phase mockups ──────────────────────────────────────────────── */

function DiscoveryMockup() {
  const items = [
    { label: "Who is the buyer persona?", done: true },
    { label: "What problem are we solving?", done: true },
    { label: "Competitor positioning audit", done: true },
    { label: "Existing tech & integrations", done: false },
    { label: "Define success metrics", done: false },
  ];
  return (
    <div className="mt-5">
      <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Discovery checklist
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div
              className={[
                "w-4 h-4 rounded border flex items-center justify-center shrink-0",
                item.done
                  ? "bg-gray-900 border-gray-900"
                  : "bg-white border-gray-300",
              ].join(" ")}
            >
              {item.done && (
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1.5 4.5L3.5 6.5L7.5 2.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span
              className={[
                "text-[11px]",
                item.done
                  ? "text-gray-400 line-through decoration-gray-300"
                  : "text-gray-600",
              ].join(" ")}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyMockup() {
  const cols = [
    {
      label: "Backlog",
      bg: "bg-gray-50",
      tasks: ["Brand audit", "SEO gap analysis", "Tech scope"],
    },
    {
      label: "Planned",
      bg: "bg-blue-50",
      tasks: ["Stack selection", "Architecture", "KPI framework"],
    },
    {
      label: "In Sprint",
      bg: "bg-gray-50",
      tasks: ["Roadmap doc", "Wireframes"],
    },
  ];
  return (
    <div className="mt-5">
      <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Sprint board
      </div>
      <div className="grid grid-cols-3 gap-2">
        {cols.map((col) => (
          <div key={col.label}>
            <div className="text-[9px] font-medium text-gray-500 mb-2">
              {col.label}
            </div>
            <div className="space-y-1.5">
              {col.tasks.map((task) => (
                <div
                  key={task}
                  className={[
                    "rounded-md px-2 py-1.5 text-[10px] text-gray-600 border border-gray-200",
                    col.bg,
                  ].join(" ")}
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildMockup() {
  return (
    <div className="mt-5 rounded-xl overflow-hidden border border-gray-200">
      {/* Editor titlebar */}
      <div className="bg-gray-900 px-3 py-2 flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[9px] text-gray-500">Hero.tsx</span>
      </div>
      {/* Code */}
      <div className="bg-[#0d1117] px-3 py-3 font-mono text-[10px] leading-[1.7]">
        <div>
          <span className="text-[#79c0ff]">export</span>{" "}
          <span className="text-[#d2a8ff]">function</span>{" "}
          <span className="text-[#ffa657]">Hero</span>
          <span className="text-gray-400">() {"{"}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#79c0ff]">return</span>{" "}
          <span className="text-gray-400">(</span>
        </div>
        <div className="pl-8">
          <span className="text-gray-500">&lt;</span>
          <span className="text-[#7ee787]">section</span>{" "}
          <span className="text-[#79c0ff]">className</span>
          <span className="text-gray-400">=</span>
          <span className="text-[#a5d6ff]">"hero"</span>
          <span className="text-gray-500">&gt;</span>
        </div>
        <div className="pl-12">
          <span className="text-gray-500">&lt;</span>
          <span className="text-[#7ee787]">h1</span>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-300">Scale faster</span>
          <span className="text-gray-500">&lt;/h1&gt;</span>
        </div>
        <div className="pl-8">
          <span className="text-gray-500">&lt;/section&gt;</span>
        </div>
        <div className="pl-4">
          <span className="text-gray-400">)</span>
        </div>
        <div>
          <span className="text-gray-400">{"}"}</span>
        </div>
      </div>
    </div>
  );
}

function LaunchMockup() {
  const bars = [28, 42, 38, 55, 50, 68, 74, 70, 82, 90];
  const metrics = [
    { label: "Conversion", value: "+34%" },
    { label: "Bounce Rate", value: "−12%" },
    { label: "LCP", value: "1.2s" },
  ];
  return (
    <div className="mt-5 space-y-3">
      <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">
        Post-launch metrics
      </div>
      <div className="grid grid-cols-3 gap-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg bg-gray-50 border border-gray-200 p-2.5"
          >
            <div className="text-[14px] font-semibold text-gray-900 tabular-nums">
              {m.value}
            </div>
            <div className="text-[9px] text-gray-400 mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-12">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              backgroundColor: i >= 6 ? "#3b82f6" : "#e2e8f0",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────────── */

const PHASES = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1–2",
    description:
      "We start by deeply understanding your business, goals, audience, and existing systems. No templates — every engagement begins from first principles.",
    Mockup: DiscoveryMockup,
  },
  {
    number: "02",
    title: "Strategy",
    duration: "Week 2–3",
    description:
      "Discovery becomes a concrete plan: stack selection, architecture decisions, campaign structures, and measurable KPIs you can hold us to.",
    Mockup: StrategyMockup,
  },
  {
    number: "03",
    title: "Design & Build",
    duration: "2-week sprints",
    description:
      "Iterative sprints with a working demo at the end of each. You see real progress early and often — no big-bang reveals six months in.",
    Mockup: BuildMockup,
  },
  {
    number: "04",
    title: "Launch & Scale",
    duration: "Ongoing",
    description:
      "We don't hand off and disappear. Post-launch we monitor performance, optimize funnels, and ship improvements every sprint.",
    Mockup: LaunchMockup,
  },
] as const;

const STACK_GROUPS = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "REST / GraphQL"],
  },
  {
    label: "Growth",
    items: ["Google Ads", "Meta Ads", "SEO", "GA4", "HubSpot"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare"],
  },
] as const;

/* ─── Section ────────────────────────────────────────────────────── */

export function Process() {
  return (
    <SectionWrapper id="process" className="bg-white">
      {/* Header */}
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_UP}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1]">
          How we work
        </h2>
        <p className="mt-2 text-gray-500 text-base max-w-xl">
          A four-phase process that turns vague goals into shipped products and
          growing campaigns.
        </p>
      </motion.div>

      {/* Phase cards — 2 × 2 bento grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mb-16"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PHASES.map((phase) => (
          <motion.div key={phase.number} variants={SCALE_IN}>
            <Card variant="bordered" padding="md" className="h-full">
              <div className="flex items-start justify-between mb-2">
                <span className="text-[52px] font-light text-gray-100 leading-none select-none tabular-nums">
                  {phase.number}
                </span>
                <span className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mt-1.5">
                  {phase.duration}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-2">
                {phase.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {phase.description}
              </p>
              <phase.Mockup />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Stack ──────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={STAGGER}
      >
        <motion.div variants={FADE_UP} className="mb-6">
          <h3 className="text-2xl md:text-[32px] font-normal text-gray-900 tracking-tight">
            Our stack
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            The tools we trust to build, ship, and grow.
          </p>
        </motion.div>

        <motion.div variants={FADE_UP}>
          <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-2 space-y-2">
            {/* Row 1 — Tech stack tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {STACK_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="bg-white rounded-xl border border-gray-100 p-5"
                >
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 — Service pillar tiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {MINI_FEATURES.map((f) => {
                const Icon = ICON_MAP[f.iconVariant];
                return (
                  <div
                    key={f.id}
                    className="bg-white rounded-xl border border-gray-100 p-5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-gray-600">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
