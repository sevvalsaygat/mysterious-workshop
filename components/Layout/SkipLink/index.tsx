// Hidden until focused: lets keyboard and screen reader users jump past the menu.
const SkipLink: React.FC = () => {
  return (
    <a
      href="#main"
      className="sr-only rounded-full bg-cream text-[13px] font-semibold tracking-[0.08em] text-earth uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-3"
    >
      İçeriğe geç
    </a>
  );
};

export default SkipLink;
