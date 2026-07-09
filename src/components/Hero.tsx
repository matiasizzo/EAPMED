import Link from 'next/link'
import Image from 'next/image'
import { HERO, STATS } from '@/content/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-soft text-teal text-xs font-medium px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            {HERO.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-navy mb-6">
            {HERO.title}
          </h1>

          <p className="text-lg text-ink-soft leading-relaxed max-w-xl mb-9">{HERO.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/checkout"
              className="rounded-full bg-navy text-paper text-sm font-medium px-8 py-4 text-center hover:bg-navy-soft transition-colors"
            >
              {HERO.primaryCta}
            </Link>
            <Link
              href="/#programa"
              className="rounded-full border border-navy/25 text-navy text-sm font-medium px-8 py-4 text-center hover:border-navy transition-colors"
            >
              {HERO.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-teal-soft via-transparent to-gold-soft -z-10" />
          <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-[1.5rem] shadow-xl shadow-navy/10">
            <Image
              src={HERO.image}
              alt={HERO.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-paper shadow-lg shadow-navy/10 border border-line px-6 py-5">
            <p className="font-display text-3xl text-navy leading-none mb-1">4,9/5</p>
            <p className="text-xs text-ink-mute">Valoración media de los alumnos</p>
          </div>
        </div>
      </div>

      {/* Barra de estadísticas */}
      <div className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-navy mb-1">{stat.value}</p>
              <p className="text-sm text-ink-mute">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
