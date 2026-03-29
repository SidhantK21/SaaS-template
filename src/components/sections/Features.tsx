import type { ReactElement } from "react";
import { motion } from "motion/react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FADE_UP, STAGGER, SCALE_IN } from "@/constants/motion.constants";

/* ─────────────────────────────────────────────────────────────────
   Mac-style keyboard — shared primitives
─────────────────────────────────────────────────────────────────── */

// All corner variants are static strings so Tailwind scanner picks them up
const KEY_CORNERS = {
  none: "rounded-[9px]",
  tl: "rounded-tl-[16px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px]",
  tr: "rounded-tl-[9px] rounded-tr-[16px] rounded-br-[9px] rounded-bl-[9px]",
  bl: "rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[16px]",
  br: "rounded-tl-[9px] rounded-tr-[9px] rounded-br-[16px] rounded-bl-[9px]",
} as const;

interface MacKeyProps {
  label?: string;
  sym?: string;
  icon?: ReactElement;
  /** flex proportion — also drives minWidth (w × 52 px) */
  w?: number;
  cr?: keyof typeof KEY_CORNERS;
  /** unused — kept so call-sites don't need changes */
  fn?: boolean;
}

function MacKey({ label, sym, icon, w = 1, cr = "none" }: MacKeyProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.07 }}
      style={{ flex: w, minWidth: w * 52 }}
      className={[
        "relative bg-white shrink-0 flex items-center justify-center cursor-default select-none",
        "h-[44px]",
        "shadow-[inset_0_0.5px_0_rgba(255,255,255,1),0_0_0_0.5px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.06)]",
        KEY_CORNERS[cr],
      ].join(" ")}
    >
      {icon ? (
        <span className="text-gray-400/80 flex items-center justify-center">
          {icon}
        </span>
      ) : sym ? (
        <div className="flex flex-col items-center justify-center gap-[2px]">
          <span className="text-[9px] text-gray-300 leading-none">{sym}</span>
          <span className="text-[13px] text-gray-500 leading-none">
            {label}
          </span>
        </div>
      ) : (
        <span className="text-[12px] text-gray-500 leading-none whitespace-nowrap px-1 text-center">
          {label}
        </span>
      )}
    </motion.div>
  );
}

/* ── Bento card mockups ─────────────────────────────────────────── */

function AuthMockup() {
  return (
    <div className="mt-4 space-y-2">
      {/* Login form */}
      <div className="rounded-xl border border-dashed border-gray-200 p-4 bg-gray-50/50">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">A</span>
          </div>
          <span className="text-sm font-medium text-gray-800">Nexus</span>
        </div>
        <div className="space-y-2.5">
          <div>
            <label className="block text-[10px] text-gray-500 mb-1">
              Email
            </label>
            <div className="w-full h-7 border border-gray-200 rounded-md bg-white px-2 flex items-center">
              <span className="text-[10px] text-gray-400">you@example.com</span>
            </div>
          </div>
          <div>
            <label className="block text-[10px] text-gray-500 mb-1">
              Password
            </label>
            <div className="w-full h-7 border border-gray-200 rounded-md bg-white px-2 flex items-center">
              <span className="text-[10px] text-gray-400 tracking-widest">
                ••••••••
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-1 text-[9px] text-gray-500">
              <div className="w-2.5 h-2.5 border border-gray-300 rounded-sm" />
              Remember me
            </label>
            <span className="text-[9px] text-blue-500">Forgot password?</span>
          </div>
          <div className="w-full h-7 bg-gray-900 rounded-md flex items-center justify-center">
            <span className="text-[10px] text-white font-medium">Sign in</span>
          </div>
          <div className="text-center text-[9px] text-gray-400">
            or continue with
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["G Google", "◎ GitHub"].map((btn) => (
              <div
                key={btn}
                className="h-6 border border-gray-200 rounded-md flex items-center justify-center"
              >
                <span className="text-[9px] text-gray-600">{btn}</span>
              </div>
            ))}
          </div>
          <div className="text-center text-[9px] text-gray-400">
            Don't have an account?{" "}
            <span className="text-blue-500">Sign up</span>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="text-[10px] text-gray-500 leading-relaxed italic">
        "Setting up auth took us 10 minutes instead of 2 weeks. The SDK just
        works out of the box with zero configuration. Our team shipped the
        entire login flow before lunch. Best developer experience we've had."
      </div>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-300 to-blue-500 flex items-center justify-center">
          <span className="text-white text-[9px] font-bold">SC</span>
        </div>
        <div>
          <div className="text-[10px] font-medium text-gray-700">
            Sarah Chen
          </div>
          <div className="text-[9px] text-gray-400">CTO at TechFlow</div>
        </div>
      </div>
    </div>
  );
}

const SECURITY_PINS: [number, number][] = [
  [-85, 28], // Central America / Caribbean
  [18, 45], // Southern Europe
  [95, 20], // Southeast Asia
];

function SecurityMockup() {
  return (
    <div
      className="relative overflow-hidden -mx-6 -mb-6"
      style={{ height: "240px" }}
    >
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 210, center: [10, 12] }}
        width={800}
        height={420}
        style={{ width: "100%", height: "130%", marginTop: "-10px" }}
      >
        <defs>
          <pattern
            id="map-dot"
            x="0"
            y="0"
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.4" fill="#c8d4e0" />
          </pattern>
        </defs>
        <Geographies geography="/world-110m.json">
          {({ geographies }: { geographies: { rsmKey: string }[] }) =>
            geographies.map((geo: { rsmKey: string }) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#map-dot)"
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
        {SECURITY_PINS.map((coords, i) => (
          <Marker key={i} coordinates={coords}>
            <g filter="drop-shadow(0 2px 6px rgba(0,0,0,0.18))">
              {/* Teardrop pin */}
              <path
                d="M0-30 C-11-30-20-21-20-10 C-20 4 0 20 0 20 C0 20 20 4 20-10 C20-21 11-30 0-30Z"
                fill="white"
                stroke="#e2e8f0"
                strokeWidth="1.5"
              />
              {/* Inner circle placeholder */}
              <circle cx="0" cy="-10" r="8" fill="#e8edf3" />
            </g>
          </Marker>
        ))}
      </ComposableMap>
      {/* Fade top into card background */}
      <div className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-linear-to-b from-white to-transparent" />
      {/* Fade left & right edges */}
      <div className="absolute inset-y-0 left-0 w-12 pointer-events-none bg-linear-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-12 pointer-events-none bg-linear-to-l from-white to-transparent" />
    </div>
  );
}

function CollabMockup() {
  const messages = [
    {
      text: "Workflow completed. 847 tasks processed.",
      side: "left",
      avatar: "TM",
    },
    { text: "Deploy to production", side: "right", avatar: "JD" },
    { text: "Deployed. All systems operational.", side: "left", avatar: "AL" },
  ];

  return (
    <div className="mt-4 space-y-3">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex items-end gap-2 ${msg.side === "right" ? "flex-row-reverse" : ""}`}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${i === 0 ? "bg-blue-500 text-white" : i === 1 ? "bg-linear-to-br from-blue-400 to-blue-600 text-white" : "bg-purple-400 text-white"}`}
          >
            {msg.avatar}
          </div>
          <div
            className={`max-w-[75%] rounded-2xl px-3 py-2 text-[11px] ${msg.side === "right" ? "bg-blue-500 text-white rounded-br-sm" : "bg-gray-100 text-gray-700 rounded-bl-sm"}`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function SdkMockup() {
  return (
    /* ── overflow wrapper: right edge fades to white ── */
    <div className="mt-4 relative overflow-hidden -mx-6 -mb-6">
      {/* white gradient fade on the right */}
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* inner left/bottom padding to align with card content */}
      <div className="pl-6 pb-6 overflow-x-hidden">
        {/* Keyboard body — very light silver */}
        <div className="bg-[#f0f0f3] rounded-2xl p-3 inline-flex flex-col gap-[5px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          {/* ── fn row ── */}
          <div className="flex gap-[5px]">
            <MacKey label="esc" w={1.2} cr="tl" />
            {[
              "F1",
              "F2",
              "F3",
              "F4",
              "F5",
              "F6",
              "F7",
              "F8",
              "F9",
              "F10",
              "F11",
              "F12",
            ].map((k) => (
              <MacKey key={k} label={k} />
            ))}
          </div>

          {/* ── number row ── */}
          <div className="flex gap-[5px]">
            <MacKey label="~" sym="`" />
            <MacKey label="1" sym="!" />
            <MacKey label="2" sym="@" />
            <MacKey label="3" sym="#" />
            <MacKey label="4" sym="$" />
            <MacKey label="5" sym="%" />
            <MacKey label="6" sym="^" />
            <MacKey label="7" sym="&" />
            <MacKey label="8" sym="*" />
            <MacKey label="9" sym="(" />
            <MacKey label="0" sym=")" />
            <MacKey label="-" sym="_" />
            <MacKey label="=" sym="+" />
            <MacKey label="delete" w={1.8} />
          </div>

          {/* ── QWERTY row ── */}
          <div className="flex gap-[5px]">
            <MacKey label="tab" w={1.5} />
            {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((k) => (
              <MacKey key={k} label={k} />
            ))}
            <MacKey label="[" sym="{" />
            <MacKey label="]" sym="}" />
            <MacKey label="\" sym="|" w={1.5} />
          </div>

          {/* ── home row ── */}
          <div className="flex gap-[5px]">
            <MacKey label="caps" w={1.8} />
            {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((k) => (
              <MacKey key={k} label={k} />
            ))}
            <MacKey label=";" sym=":" />
            <MacKey label="'" sym={'"'} />
            <MacKey label="return" w={2.1} />
          </div>

          {/* ── ZXCV row ── */}
          <div className="flex gap-[5px]">
            <MacKey label="shift" w={2.3} />
            {["Z", "X", "C", "V", "B", "N", "M"].map((k) => (
              <MacKey key={k} label={k} />
            ))}
            <MacKey label="," sym="<" />
            <MacKey label="." sym=">" />
            <MacKey label="/" sym="?" />
            <MacKey label="shift" w={2.3} />
          </div>

          {/* ── bottom row ── */}
          <div className="flex gap-[5px]">
            <MacKey label="fn" cr="bl" />
            <MacKey label="ctrl" />
            <MacKey label="opt" />
            <MacKey label="cmd" w={1.5} />
            <MacKey w={5.5} />
            <MacKey label="cmd" w={1.5} />
            <MacKey label="opt" />
            <MacKey label="←" cr="br" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const bars = [40, 65, 45, 80, 55, 90, 70];

  return (
    <div className="mt-4 space-y-3">
      {/* Bar chart */}
      <div className="flex items-end gap-1.5 h-20 px-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-blue-200"
            style={{ height: `${h}%` }}
          >
            {i === 5 && (
              <div className="w-full h-full bg-blue-500 rounded-t-sm" />
            )}
          </div>
        ))}
      </div>
      {/* Portrait image placeholder */}
      <div className="rounded-xl overflow-hidden border border-gray-100 aspect-4/3 bg-linear-to-br from-slate-300 to-slate-400 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-slate-500 mx-auto mb-2 flex items-center justify-center">
            <span className="text-white text-lg font-bold">A</span>
          </div>
          <div className="text-slate-600 text-xs">Analytics Demo</div>
        </div>
      </div>
    </div>
  );
}

/* ── Static lookup — satisfies Tailwind scanner (no template literals) ── */
const COL_SPAN: Record<1 | 2 | 3, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
};
const ROW_SPAN: Record<1 | 2, string> = {
  1: "row-span-1",
  2: "row-span-2",
};

type BentoVariant = "auth" | "security" | "collab" | "sdk" | "analytics";

const VARIANT_CONTENT: Record<BentoVariant, () => ReactElement> = {
  auth: AuthMockup,
  security: SecurityMockup,
  collab: CollabMockup,
  sdk: SdkMockup,
  analytics: AnalyticsMockup,
};

interface BentoCardProps {
  title: string;
  description: string;
  colSpan: 1 | 2 | 3;
  rowSpan: 1 | 2;
  variant: BentoVariant;
}

function BentoCard({
  title,
  description,
  colSpan,
  rowSpan,
  variant,
}: BentoCardProps) {
  const Content = VARIANT_CONTENT[variant];

  return (
    <motion.div
      variants={SCALE_IN}
      className={[COL_SPAN[colSpan], ROW_SPAN[rowSpan]].join(" ")}
    >
      <Card variant="bordered" padding="md" className="h-full">
        <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
        <Content />
      </Card>
    </motion.div>
  );
}

export function Features() {
  return (
    <SectionWrapper id="features">
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_UP}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1]">
          Autonomous AI workflow features
        </h2>
        <p className="mt-2 text-gray-500 text-base">
          From prototype to production, autonomously
        </p>
      </motion.div>

      {/* Bento grid: 3 cols, 2 rows. Auth spans col-1 rows 1-2. */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:grid-rows-[auto_auto]"
        variants={STAGGER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <BentoCard
          title="Easy auth setup"
          description="Get started in minutes with our simple authentication flow."
          colSpan={1}
          rowSpan={2}
          variant="auth"
        />
        <BentoCard
          title="You're secure, everywhere"
          description="Enterprise-grade security that follows your users across the globe. Built-in encryption, compliance, and monitoring."
          colSpan={1}
          rowSpan={1}
          variant="security"
        />
        <BentoCard
          title="Real-time collaboration"
          description="Connect with your team instantly. AI-powered insights help you work smarter together."
          colSpan={1}
          rowSpan={1}
          variant="collab"
        />
        <BentoCard
          title="SDK available for everything"
          description="Native SDKs for every platform. React, Vue, iOS, Android, and more."
          colSpan={1}
          rowSpan={1}
          variant="sdk"
        />
        <BentoCard
          title="Built-in analytics"
          description="Track performance, monitor usage, and gain actionable insights in real time."
          colSpan={1}
          rowSpan={1}
          variant="analytics"
        />
      </motion.div>
    </SectionWrapper>
  );
}
