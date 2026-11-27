import Image from "next/image";

import { TextLink } from "@app/components";

import kilnImage from "@/public/images/firin.webp";

const Studio: React.FC = () => {
  return (
    <section className="bg-cream text-earth">
      <div className="mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-16 gap-y-12 px-gutter py-[clamp(72px,9vw,128px)]">
        <div className="flex max-w-130 flex-col gap-5">
          <span className="text-[13px] tracking-widest text-muted uppercase">
            (Atölye)
          </span>
          <h2 className="font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-light tracking-[-0.01em]">
            Bir masa, bir fırın ve küçük bir ekip.
          </h2>
          <p className="text-[17px] leading-[1.65] text-muted">
            Her parçayı kendimiz şekillendiriyor, sırlıyor ve pişiriyoruz.
            Kurslarda da aynı masayı paylaşıyoruz: acele yok, herkes kendi
            hızında.
          </p>
          <TextLink href="/about" title="Atölyeyi tanı" />
        </div>

        <figure className="flex flex-col gap-2.5">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand">
            <Image
              src={kilnImage}
              alt="Fırın tuğlaları üstünde yeni pişmiş kupalar"
              fill
              placeholder="blur"
              sizes="(min-width: 1440px) 640px, (min-width: 904px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="text-[13px] text-muted">Fırın günü</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Studio;
