import { LogoMark } from "@/components/ui/Icons";
import { LuTwitter, LuLinkedin, LuGithub, LuMoon } from "react-icons/lu";
import { FOOTER_COLUMNS } from "@/constants/footer.constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand column */}
          <div className="shrink-0">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark />
              <span className="text-[15px] font-semibold text-gray-900">
                GeekStudios
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <a href="#" aria-label="Follow on X" className="text-gray-400 hover:text-gray-900 transition-colors">
                <LuTwitter size={18} />
              </a>
              <a href="#" aria-label="Connect on LinkedIn" className="text-gray-400 hover:text-gray-900 transition-colors">
                <LuLinkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-gray-900 transition-colors">
                <LuGithub size={18} />
              </a>
              <button type="button" aria-label="Toggle theme" className="text-gray-400 hover:text-gray-900 transition-colors">
                <LuMoon size={18} />
              </button>
            </div>
            <p className="text-[11px] text-gray-400">
              © copyright GeekStudios {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          {/* Link columns — grouped on the right */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.id}>
                <h4 className="text-[13px] font-semibold text-gray-900 mb-4">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized wordmark — centered, clipped at bottom */}
      <div style={{ height: "clamp(50px, 10vw, 180px)", overflow: "hidden" }}>
        <p
          className="font-bold tracking-tighter leading-none whitespace-nowrap select-none text-center"
          style={{
            fontSize: "clamp(52px, 13.5vw, 230px)",
            color: "#ffffff",
            WebkitTextStroke: "1.5px rgba(17, 24, 39, 0.25)",
            paintOrder: "stroke fill",
          }}
        >
          GeekStudios
        </p>
      </div>
    </footer>
  );
}
