import Image from 'next/image'
import { ABOUT } from '@/content/site'

export default function About() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <h2 className="font-semibold text-3xl sm:text-4xl leading-tight mb-5">{ABOUT.title}</h2>
          <p className="text-ink-soft leading-relaxed">{ABOUT.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white border border-ink/10 shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-base mb-2.5">{card.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
