import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { STAGGER, FADE_UP } from "@/constants/motion.constants";

/* ─────────────────────────────────────────────────────────────────
   Device SVG illustrations — refined to match reference
   Stroke colour: #c9cbd0  Fill: white / #f4f5f7
───────────────────────────────────────────────────────────────── */

const S = "#c9cbd0"; // stroke / button colour
const BG = "#f4f5f7"; // inner screen fill

function PhoneIllustration() {
  return (
    <svg width="156" height="278" viewBox="0 0 156 278" fill="none" aria-hidden>
      {/* Outer shell */}
      <rect
        x="6"
        y="4"
        width="144"
        height="270"
        rx="32"
        fill="white"
        stroke={S}
        strokeWidth="2.5"
      />
      {/* Screen */}
      <rect x="14" y="13" width="128" height="252" rx="24" fill={BG} />
      {/* Dynamic Island */}
      <rect x="50" y="20" width="56" height="14" rx="7" fill={S} />
      {/* Home indicator */}
      <rect x="54" y="253" width="48" height="5" rx="2.5" fill={S} />
      {/* Vol up */}
      <rect
        x="0"
        y="82"
        width="5.5"
        height="28"
        rx="2.75"
        fill={BG}
        stroke={S}
        strokeWidth="1.2"
      />
      {/* Vol down */}
      <rect
        x="0"
        y="118"
        width="5.5"
        height="28"
        rx="2.75"
        fill={BG}
        stroke={S}
        strokeWidth="1.2"
      />
      {/* Power */}
      <rect
        x="150.5"
        y="102"
        width="5.5"
        height="38"
        rx="2.75"
        fill={BG}
        stroke={S}
        strokeWidth="1.2"
      />
    </svg>
  );
}

function LaptopIllustration() {
  /* Trapezoidal lid — bottom edge wider than top, giving perspective depth */
  const lidTop =
    "M 42,6  L 438,6  Q 450,6 452,18 L 472,188 L 8,188 L 28,18 Q 30,6 42,6 Z";
  const screenInner = "M 56,20 L 424,20 L 450,174 L 30,174 Z";
  return (
    <svg width="480" height="218" viewBox="0 0 480 218" fill="none" aria-hidden>
      {/* Lid */}
      <path
        d={lidTop}
        fill="white"
        stroke={S}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Display */}
      <path d={screenInner} fill={BG} />
      {/* Webcam dot */}
      <circle cx="240" cy="13" r="3.5" fill={S} />
      {/* Base plate */}
      <path
        d="M 0,188 L 480,188 L 474,205 L 6,205 Z"
        fill="#eaebee"
        stroke={S}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Centre hub */}
      <rect x="208" y="192" width="64" height="9" rx="4.5" fill={S} />
      {/* Rounded foot edge */}
      <path
        d="M 4,205 Q 240,213 476,205"
        stroke={S}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TabletIllustration() {
  return (
    <svg width="370" height="262" viewBox="0 0 370 262" fill="none" aria-hidden>
      {/* Shell */}
      <rect
        x="5"
        y="4"
        width="360"
        height="254"
        rx="28"
        fill="white"
        stroke={S}
        strokeWidth="2.5"
      />
      {/* Screen */}
      <rect x="14" y="13" width="336" height="236" rx="20" fill={BG} />
      {/* Top volume buttons */}
      <rect
        x="82"
        y="0"
        width="22"
        height="6"
        rx="3"
        fill={BG}
        stroke={S}
        strokeWidth="1.2"
      />
      <rect
        x="112"
        y="0"
        width="22"
        height="6"
        rx="3"
        fill={BG}
        stroke={S}
        strokeWidth="1.2"
      />
      {/* Right power */}
      <rect
        x="365"
        y="86"
        width="6"
        height="30"
        rx="3"
        fill={BG}
        stroke={S}
        strokeWidth="1.2"
      />
      {/* Front camera left */}
      <circle cx="9" cy="131" r="3.5" fill="#dddfe3" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Animated wavy connector
   · Gray dashed base path (always visible)
   · Blue segment slides along the wave (motion strokeDashoffset)
   · Dots have a white ring so they sit cleanly over the path
───────────────────────────────────────────────────────────────── */

/*
  Gentle 2-hump wave — amplitude ±10px from centre (y=36).
  Much flatter than before to match the reference.
*/
const WAVE =
  "M 60,36 C 155,28 215,44 330,36 C 445,28 505,44 600,36 C 695,28 755,44 870,36 C 985,28 1045,44 1140,36";
const DOTS = [60, 600, 1140] as const;
const DY = 36;

/*
  Technique: sliding clipPath window.
  ─ Gray path:  full wave, small round dots (strokeDasharray "2 8").
  ─ Blue path:  identical dot pattern on the same wave.
                A <motion.rect> clipPath 90px wide slides from left to right,
                revealing only that 90px slice of the blue dots — creating
                a cluster of blue dots that travels along the wave.
  ─ Anchor dots: gray stroke ring → white interior → blue centre.
*/
function AnimatedConnector() {
  return (
    <div className="hidden md:flex justify-center w-full mb-10">
      <svg
        width="80%"
        height="72"
        viewBox="0 0 1200 72"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <clipPath id="travelling-window">
            <motion.rect
              x="0"
              y="0"
              width="90"
              height="72"
              animate={{ x: [-90, 1220] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear",
              }}
            />
          </clipPath>
        </defs>

        {/* 1 — Gray dotted base wave */}
        <path
          d={WAVE}
          stroke="#d1d5db"
          strokeWidth="1.8"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />

        {/* 2 — Blue dots, same pattern, clipped to the 90px travelling window */}
        <path
          d={WAVE}
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="2 8"
          strokeLinecap="round"
          clipPath="url(#travelling-window)"
        />

        {/* 3 — Anchor dots: gray ring → white fill → blue centre */}
        {DOTS.map((cx) => (
          <g key={cx}>
            <circle
              cx={cx}
              cy={DY}
              r="9"
              fill="white"
              stroke="#c8cdd6"
              strokeWidth="1.5"
            />
            <circle cx={cx} cy={DY} r="4.5" fill="#3b82f6" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────────────── */

const PLATFORMS = [
  {
    id: "mobile",
    Illustration: PhoneIllustration,
    label: "Agents in your pocket",
    desc: "Monitor workflows and receive real-time alerts on the go.",
  },
  {
    id: "desktop",
    Illustration: LaptopIllustration,
    label: "Full control at your desk",
    desc: "Build, debug, and deploy agents with powerful desktop tools.",
  },
  {
    id: "tablet",
    Illustration: TabletIllustration,
    label: "Orchestrate from anywhere",
    desc: "Manage complex workflows with touch-friendly dashboards.",
  },
];

export function CrossPlatform() {
  return (
    <SectionWrapper className="bg-white">
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_UP}
      >
        <h2 className="text-4xl md:text-[52px] lg:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1] mb-4">
          Deploy agents
          <br />
          across every platform
        </h2>
        <p className="text-base text-gray-500 max-w-lg mx-auto">
          Your AI agents work seamlessly on mobile, desktop, and tablet. Monitor
          and orchestrate from anywhere.
        </p>
      </motion.div>

      {/* Animated wavy connector with 3 blue dots */}
      <AnimatedConnector />

      {/* Device illustrations — bottom-aligned */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {PLATFORMS.map(({ id, Illustration, label, desc }) => (
          <motion.div
            key={id}
            variants={FADE_UP}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-7 flex items-end justify-center w-full overflow-visible">
              <Illustration />
            </div>
            <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
              {label}
            </h3>
            <p className="text-sm text-gray-500 max-w-[230px] leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
