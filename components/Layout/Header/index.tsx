import Link from "next/link";

import Button from "@app/components/Button";
import MobileMenu from "@app/components/Layout/MobileMenu";
import NavLink from "@app/components/Layout/NavLink";
import { BOOKING_LINK, NAV_LINKS } from "@app/constants";

const Header: React.FC = () => {
  return (
    <header className="bg-espresso text-cream">
      <div className="mx-auto flex max-w-page items-center justify-between gap-10 px-gutter py-6">
        <Link href="/" className="font-serif text-[22px]">
          sırlı atölye
        </Link>

        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-8 text-[13px] font-semibold tracking-[0.08em] uppercase desktop:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <Button
            href={BOOKING_LINK.href}
            title={BOOKING_LINK.label}
            variant="outline-light"
            size="sm"
          />
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
