import Link from 'next/link'
import { HERO } from '@/content/site'

export default function Hero() {
  return (
    <section className="bg-bg pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 lg:pt-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel text-mist text-xs px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          {HERO.badge}
        </span>

        <h1 className="mb-3">
          <span className="font-display text-5xl sm:text-6xl lg:text-8xl text-gold tracking-wide">
            <span className="text-white">
              {HERO.titlePrefix}
              <sup className="text-[0.45em] font-sans font-light align-super">{HERO.titleOrdinal}</sup>
            </span>{' '}
            {HERO.title}
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 mb-10">
          {HERO.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/checkout"
            className="rounded-full bg-white text-ink text-sm font-medium px-8 py-3.5 hover:bg-gold hover:text-ink transition-colors"
          >
            {HERO.primaryCta}
          </Link>
          <Link
            href="/#temas"
            className="rounded-full border border-line bg-panel text-white text-sm font-medium px-8 py-3.5 hover:border-mist transition-colors"
          >
            {HERO.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Carrusel de imágenes del hero */}
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {HERO.images.map((src, i) => (
                <div key={`${copy}-${i}`} className="flex shrink-0 items-stretch">
                  <div className="w-64 sm:w-80 lg:w-96 aspect-[4/3] mr-5 rounded-2xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  {/* Tarjeta +40 Experts intercalada en el carrusel */}
                  {i === 2 && (
                    <div className="w-44 sm:w-52 mr-5 rounded-2xl bg-teal flex flex-col items-center justify-center gap-1 text-white">
                      <span className="font-display text-4xl sm:text-5xl">{HERO.expertsCard.value}</span>
                      <span className="text-sm tracking-[0.14em] uppercase">{HERO.expertsCard.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
