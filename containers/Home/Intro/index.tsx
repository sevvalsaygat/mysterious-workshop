import { TextLink } from "@app/components";

const Intro: React.FC = () => {
  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-x-16 gap-y-8 px-gutter py-[clamp(72px,9vw,128px)]">
        <h2 className="reveal font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.12] font-light tracking-[-0.01em]">
          Kil, ateş ve sabır. Her parça burada, elle şekilleniyor.
        </h2>

        <div className="flex reveal flex-col gap-5 pt-2.5">
          <span className="text-[13px] tracking-widest text-muted-light uppercase">
            (Biz kimiz)
          </span>
          <p className="text-[17px] leading-[1.65] text-cream-dim">
            Sırlı Atölye küçük bir seramik atölyesi. Haftanın beş günü kurs
            veriyor; sofralar için kase, kupa ve tabaklar üretiyoruz. Her parça
            çarkta ya da elde şekilleniyor, atölyenin kendi fırınında pişiyor.
          </p>
          <TextLink href="/about" title="Hakkımızda" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
