import Link from "next/link";

import Button from "@app/components/Button";
import OpenStatus from "@app/components/OpenStatus";
import { NAV_LINKS, SITE } from "@app/constants";

const LABEL_CLASSES = "text-[11px] tracking-[0.12em] text-muted uppercase";
const ARROW_CLASSES =
  "inline-block transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream text-earth">
      <div className="mx-auto flex max-w-page flex-col gap-[clamp(48px,5vw,64px)] px-gutter pt-[clamp(64px,7vw,88px)] pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-x-20 gap-y-12">
          <div className="flex flex-col gap-5">
            <div className="font-serif text-[clamp(48px,5.6vw,80px)] leading-[0.9] font-light tracking-[-0.02em]">
              <span className="sr-only">{SITE.name}</span>
              <span aria-hidden="true" className="flex items-center">
                sırlı
                <span className="mx-[0.12em] mt-[0.18em] size-[0.13em] rounded-full bg-terracotta" />
                atölye
              </span>
            </div>
            <p className="max-w-85 text-[15px] leading-[1.6] text-muted">
              El yapımı seramik ve küçük gruplarla kurslar.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href="/contact" title="Bize yaz" variant="outline-dark" />
              {/* Fictional brand: looks like a link, but goes nowhere */}
              <span className="group cursor-pointer link-underline text-sm">
                Instagram{" "}
                <span aria-hidden="true" className={ARROW_CLASSES}>
                  ↗
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-8 pt-2 text-sm leading-[1.7]">
            <div className="flex flex-col gap-2">
              <span className={LABEL_CLASSES}>Ziyaret</span>
              <address className="not-italic">
                {SITE.address.district}
                <br />
                {SITE.address.city}
              </address>
            </div>

            <div className="flex flex-col gap-2">
              <span className={LABEL_CLASSES}>Bugün</span>
              <OpenStatus />
              <Link
                href="/contact#hours"
                className="group self-start link-underline"
              >
                Tüm saatler{" "}
                <span aria-hidden="true" className={ARROW_CLASSES}>
                  ↗
                </span>
              </Link>
            </div>

            <nav aria-label="Alt menü" className="flex flex-col gap-2">
              <span className={LABEL_CLASSES}>Sayfalar</span>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="self-start link-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-earth/15 pt-6 text-xs leading-[1.6] text-muted">
          <span>© 2026 {SITE.name}</span>
          <span>Hayali bir marka için hazırlanmış portfolyo projesidir.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
