import { LogoMark } from "@/components/ui/Icons";
import { LuTwitter, LuLinkedin, LuMoon } from "react-icons/lu";
import { FOOTER_COLUMNS } from "@/constants/footer.constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark />
              <span className="text-[15px] font-semibold text-gray-900">
                Simplistic
              </span>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 mb-4">
              <a
                href="#"
                aria-label="Follow on X"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <LuTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Connect on LinkedIn"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <LuLinkedin size={18} />
              </a>
              <button
                type="button"
                aria-label="Toggle theme"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <LuMoon size={18} />
              </button>
            </div>
            <p className="text-[11px] text-gray-400">
              © copyright Simplistic {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.id} className="md:col-span-1">
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
    </footer>
  );
}
