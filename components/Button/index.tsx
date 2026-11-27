import Link from "next/link";

import cn from "classnames";

type ButtonPropTypes = {
  title: string;
  href?: string;
  type?: "button" | "submit";
  variant?: "outline-light" | "outline-dark" | "terracotta";
  size?: "sm" | "md";
  arrow?: boolean;
  className?: string;
  popoverTarget?: string;
  popoverTargetAction?: "show" | "hide" | "toggle";
};

const VARIANT_CLASSES = {
  "outline-light":
    "border border-cream/60 text-cream hover:bg-cream hover:text-earth",
  "outline-dark":
    "border border-earth text-earth hover:bg-espresso hover:text-cream",
  terracotta: "bg-terracotta text-white hover:bg-terracotta-dark",
};

const SIZE_CLASSES = {
  sm: "px-4.5 py-2.5",
  md: "px-5 py-3",
};

const Button: React.FC<ButtonPropTypes> = ({
  title,
  href,
  type = "button",
  variant = "outline-dark",
  size = "md",
  arrow = true,
  className,
  popoverTarget,
  popoverTargetAction,
}) => {
  const classes = cn(
    "group inline-flex items-center gap-1.5 rounded-full text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-250",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  );

  const content = (
    <>
      {title}
      {arrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      popoverTarget={popoverTarget}
      popoverTargetAction={popoverTargetAction}
    >
      {content}
    </button>
  );
};

export default Button;
