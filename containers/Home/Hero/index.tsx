import Image from "next/image";

import cn from "classnames";

import heroImage from "@/public/images/hero-raf-vazolar.webp";
import vaseImage from "@/public/images/vazo-temiz.webp";

import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={cn("bg-espresso text-cream", styles.hero)}>
      <div className="relative z-2 mx-auto max-w-page px-gutter pt-[clamp(40px,6vw,96px)]">
        <h1
          className={cn(
            "grid grid-cols-[1fr_auto_1fr] items-center font-serif leading-none font-light tracking-[-0.03em]",
            styles.title,
          )}
        >
          <span className="sr-only">Sırlı Atölye</span>
          <span aria-hidden="true" className="animate-rise text-right">
            sırlı
          </span>
          <span
            aria-hidden="true"
            className="mx-[0.14em] mt-[0.18em] size-[0.13em] animate-pop rounded-full bg-terracotta"
          />
          <span aria-hidden="true" className="animate-rise-1">
            atölye
          </span>
        </h1>
      </div>

      {/* Zero-height layer right under the logo; the vase hangs up from it, behind the letters */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-1 mx-auto h-0 max-w-page px-gutter"
      >
        <div className="relative h-0">
          <div className={styles.vase}>
            <Image
              src={vaseImage}
              alt=""
              sizes="300px"
              className={cn("block h-auto w-full", styles.vaseImage)}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-page px-gutter">
        <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-6 text-[clamp(15px,1.5vw,22px)]">
          <span className="animate-rise-2">Seramik atölyesi</span>
          <span
            aria-hidden="true"
            className="h-22 w-px origin-top animate-draw bg-cream/35"
          />
          <span className="animate-rise-2 text-right">
            Kurslar · El yapımı ürünler
          </span>
        </div>

        <div className="relative aspect-16/7 animate-settle overflow-hidden rounded-2xl">
          <Image
            src={heroImage}
            alt="Güneş alan krem sıva duvarın önünde alçak bir raf; rafta yan yana dizilmiş, aynı biçimde, farklı boy ve renklerde vazolar; duvara yaprak gölgeleri düşüyor"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1440px) 1340px, 94vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
