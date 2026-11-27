"use client";

import { useRef } from "react";
import Link from "next/link";

import Button from "@app/components/Button";
import NavLink from "@app/components/Layout/NavLink";
import { BOOKING_LINK, NAV_LINKS, SITE } from "@app/constants";

const MENU_ID = "mobile-menu";

const MobileMenu: React.FC = () => {
  const panelRef = useRef<HTMLDivElement>(null);

  // The layout stays mounted between pages, so close the panel on any link click.
  const handlePanelClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a")) {
      panelRef.current?.hidePopover();
    }
  };

  return (
    <div className="desktop:hidden">
      <Button
        title="Menü"
        variant="outline-light"
        size="sm"
        arrow={false}
        popoverTarget={MENU_ID}
      />

      <div
        id={MENU_ID}
        ref={panelRef}
        popover="auto"
        onClick={handlePanelClick}
        className="m-0 h-dvh w-full flex-col overflow-y-auto border-0 bg-espresso p-0 text-cream opacity-0 transition-[opacity,display,overlay] transition-discrete duration-200 open:flex open:opacity-100 starting:open:opacity-0"
      >
        <div className="flex items-center justify-between gap-10 px-gutter py-6">
          <Link href="/" className="font-serif text-[22px]">
            sırlı atölye
          </Link>
          <Button
            title="Kapat"
            variant="outline-light"
            size="sm"
            arrow={false}
            popoverTarget={MENU_ID}
            popoverTargetAction="hide"
          />
        </div>

        <nav aria-label="Ana menü" className="px-gutter pt-6">
          <ul className="divide-y divide-cream/20">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="py-4">
                <NavLink
                  href={link.href}
                  label={link.label}
                  className="font-serif text-[40px] leading-tight font-light"
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col items-start gap-6 px-gutter py-10">
          <Button
            href={BOOKING_LINK.href}
            title={BOOKING_LINK.label}
            variant="terracotta"
          />
          <p className="text-sm text-muted-light">
            {SITE.address.district} · {SITE.address.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
