import Image from "next/image";
import Link from "next/link";

import Button from "@app/components/Button";
import { WORKSHOPS } from "@app/data";
import { formatPrice } from "@app/lib/format";

import workshopImage from "@/public/images/atolye-masasi.webp";

const Workshops: React.FC = () => {
  return (
    <section className="bg-cream text-earth">
      <div className="mx-auto flex max-w-page flex-col gap-[clamp(40px,5vw,64px)] px-gutter py-[clamp(72px,9vw,128px)]">
        <div className="flex reveal flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] tracking-widest text-muted uppercase">
              (Atölyeler)
            </span>
            <h2 className="font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-light tracking-[-0.01em]">
              Kendi parçanı yapmayı öğren
            </h2>
          </div>
          <Button href="/workshops" title="Tüm atölyeler" />
        </div>

        <div className="grid gap-[clamp(32px,4.5vw,64px)] desktop:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <figure className="flex flex-col gap-2.5">
            <div className="relative aspect-square min-h-80 flex-1 overflow-hidden rounded-2xl bg-sand">
              <Image
                src={workshopImage}
                alt="Atölye masasında çark ve alet kapları"
                fill
                placeholder="blur"
                sizes="(min-width: 1440px) 560px, (min-width: 900px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-[13px] text-muted">
              Küçük gruplar, en fazla 8 kişi
            </figcaption>
          </figure>

          <ol
            aria-label="Atölyeler"
            className="flex flex-col border-t border-earth/25"
          >
            {WORKSHOPS.map((workshop) => (
              <li
                key={workshop.slug}
                className="flex flex-1 border-b border-earth/25"
              >
                <Link
                  href={`/workshops/${workshop.slug}`}
                  className="group grid flex-1 grid-cols-[minmax(0,1fr)_auto_44px] items-center gap-x-6 gap-y-2 py-5.5 max-[560px]:grid-cols-[minmax(0,1fr)_44px]"
                >
                  <span className="flex flex-col gap-1.5 transition-transform duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-2 group-focus-visible:translate-x-2">
                    <span className="font-serif text-[clamp(24px,2.3vw,34px)] leading-[1.1]">
                      {workshop.name}
                    </span>
                    <span className="text-sm text-muted">
                      {workshop.level} · {workshop.duration} · {workshop.rhythm}
                    </span>
                  </span>

                  <span className="text-[15px] font-bold whitespace-nowrap max-[560px]:col-start-1 max-[560px]:row-start-2">
                    {formatPrice(workshop.price)}
                  </span>

                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-full border border-earth/35 text-[15px] transition-colors duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-white group-focus-visible:border-terracotta group-focus-visible:bg-terracotta group-focus-visible:text-white max-[560px]:col-start-2 max-[560px]:row-span-2 max-[560px]:row-start-1"
                  >
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
