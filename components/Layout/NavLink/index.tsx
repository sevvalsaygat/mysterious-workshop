"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import cn from "classnames";

type NavLinkPropTypes = {
  href: string;
  label: string;
  className?: string;
};

const NavLink: React.FC<NavLinkPropTypes> = ({ href, label, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn("link-underline", className)}
    >
      {label}
    </Link>
  );
};

export default NavLink;
