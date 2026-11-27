import Image from "next/image";

import cn from "classnames";

import heroImage from "@/public/images/hero-raf-vazolar.webp";
import vaseShadowImage from "@/public/images/vazo-golgesi.webp";
import vaseImage from "@/public/images/vazo-temiz.webp";
import vaseDappleImage from "@/public/images/vazo-yaprak-golgesi.webp";

import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={cn("bg-espresso text-cream", styles.hero)}>
      {/* The vase falls inside this box and stops at its bottom edge (the shelf) */}
      <div className={cn("relative", styles.drop)}>
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
          className={cn(
            "pointer-events-none relative z-1 mx-auto h-0 max-w-page px-gutter",
            styles.vaseLayer,
          )}
        >
          <div className="relative h-0">
            <div className={styles.vase}>
              <Image
                src={vaseImage}
                alt=""
                sizes="300px"
                className={cn("block h-auto w-full", styles.vaseImage)}
              />
              <Image
                src={vaseDappleImage}
                alt=""
                sizes="300px"
                className={cn(
                  "absolute top-0 left-0 h-auto w-full",
                  styles.vaseDapple,
                )}
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto flow-root max-w-page px-gutter">
          {/* On phones the texts start 12px lower, clear of the "y" in the logo; the 88px line keeps the row height */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-6 text-[clamp(15px,1.5vw,22px)]">
            <span className="animate-rise-2 max-desktop:pt-3">
              Seramik atölyesi
            </span>
            <span
              aria-hidden="true"
              className="h-22 w-px origin-top animate-draw bg-cream/35"
            />
            <span className="animate-rise-2 text-right max-desktop:pt-3">
              Kurslar · El yapımı ürünler
            </span>
          </div>

          <div
            className={cn(
              "relative animate-settle overflow-hidden rounded-2xl",
              styles.photo,
            )}
          >
            <Image
              src={heroImage}
              alt="Güneş alan krem sıva duvarın önünde alçak bir raf; rafta yan yana dizilmiş, aynı biçimde, farklı boy ve renklerde vazolar; duvara yaprak gölgeleri düşüyor"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1440px) 1340px, 94vw"
              className="object-cover"
            />
            <Image
              src={vaseShadowImage}
              alt=""
              aria-hidden="true"
              sizes="600px"
              className={cn("pointer-events-none", styles.vaseShadow)}
            />
          </div>

          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-x-0 bottom-0 h-px",
              styles.groundMark,
            )}
          />
        </div>
      </div>

      <div aria-hidden="true" className={styles.spacer} />
    </section>
  );
};

export default Hero;
