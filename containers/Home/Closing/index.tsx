import { Button } from "@app/components";
import { BOOKING_LINK, SITE } from "@app/constants";

const Closing: React.FC = () => {
  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto flex max-w-page flex-col gap-[clamp(28px,3vw,40px)] px-gutter py-[clamp(72px,9vw,128px)]">
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 border-t border-cream/30 pt-3.5 text-[13px] tracking-[0.08em] text-muted-light uppercase">
          <span>(Atölyeler)</span>
          <span>Küçük gruplar · {SITE.address.district}</span>
        </div>

        <h2 className="reveal font-serif text-[clamp(60px,12.5vw,190px)] leading-[0.95] font-light tracking-[-0.035em]">
          <span className="block">Kendi kaseni</span>
          <span className="flex flex-wrap items-center justify-end gap-x-[0.18em]">
            <span
              aria-hidden="true"
              className="size-[0.12em] flex-none rounded-full bg-terracotta"
            />
            {/* Terracotta text fails contrast on espresso, so the dot carries the accent */}
            <span className="text-muted-light">kendin yap.</span>
          </span>
        </h2>

        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-cream/30 pt-6">
          <p className="max-w-107.5 text-[17px] leading-[1.65] text-cream-dim">
            Kurslar küçük gruplarla yapılıyor. Yerini ayırt, kalanını atölyede
            birlikte öğrenelim.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              href={BOOKING_LINK.href}
              title={BOOKING_LINK.label}
              variant="terracotta"
              size="lg"
            />
            <Button
              href="/contact"
              title="Bize yaz"
              variant="outline-light"
              size="lg"
              arrow={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
