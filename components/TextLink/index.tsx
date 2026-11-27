import Link from "next/link";

import cn from "classnames";

type TextLinkPropTypes = {
  href: string;
  title: string;
  className?: string;
};

// Always-underlined text link with an arrow that nudges on hover; takes the text colour around it.
const TextLink: React.FC<TextLinkPropTypes> = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "group self-start text-sm font-semibold underline underline-offset-[5px]",
        className,
      )}
    >
      {title}{" "}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </Link>
  );
};

export default TextLink;
