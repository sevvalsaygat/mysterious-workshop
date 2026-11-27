import Image from "next/image";
import Link from "next/link";

import Button from "@app/components/Button";
import { FEATURED_PRODUCTS } from "@app/data";

const Collection: React.FC = () => {
  return (
    <section className="bg-espresso text-cream">
      <div className="mx-auto flex max-w-page flex-col gap-[clamp(40px,5vw,72px)] px-gutter py-[clamp(72px,9vw,128px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-16 gap-y-6">
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] tracking-[0.08em] text-muted-light uppercase">
              (Koleksiyon)
            </span>
            <h2 className="font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-light tracking-[-0.01em]">
              El yapımı, her biri tek.
            </h2>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <p className="max-w-95 leading-[1.65] text-cream-dim">
              Kase, kupa, tabak ve vazo. Her parça elde şekilleniyor; aynısı bir
              daha yapılmıyor.
            </p>
            <Button
              href="/collection"
              title="Tüm koleksiyon"
              variant="outline-light"
              className="whitespace-nowrap"
            />
          </div>
        </div>

        <ul
          aria-label="Koleksiyondan parçalar"
          className="grid grid-cols-2 gap-[clamp(16px,2vw,28px)] desktop:grid-cols-4"
        >
          {FEATURED_PRODUCTS.map((product) => (
            <li key={product.slug}>
              <Link href="/collection" className="group flex flex-col gap-3">
                <span className="relative block aspect-4/5 overflow-hidden rounded-2xl bg-sand transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1440px) 330px, (min-width: 900px) 23vw, 46vw"
                    className="object-cover"
                  />
                </span>
                <span className="pt-1 font-serif text-[clamp(20px,1.8vw,24px)]">
                  {product.name}
                </span>
                <span className="text-sm text-muted-light">
                  {product.type} · {product.size}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collection;
