import Link from 'next/link'
import { EXPERTS } from '@/content/site'

function Row({ images, reverse }: { images: string[]; reverse?: boolean }) {
  return (
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {images.map((src, i) => (
              <div
                key={`${copy}-${i}`}
                className="w-36 sm:w-44 aspect-[3/4] mr-4 rounded-xl overflow-hidden bg-ink/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experts() {
  const half = Math.ceil(EXPERTS.images.length / 2)
  const rowA = EXPERTS.images.slice(0, half)
  const rowB = EXPERTS.images.slice(half)

  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-2xl mb-10">
          <h2 className="font-semibold text-3xl sm:text-4xl mb-4">{EXPERTS.title}</h2>
          <p className="text-ink-soft leading-relaxed">{EXPERTS.description}</p>
        </div>

        {/* Carrusel de expertos en dos filas */}
        <div className="space-y-4 mb-12">
          <Row images={rowA} />
          <Row images={rowB} reverse />
        </div>

        <div className="text-center">
          <Link
            href="/checkout"
            className="inline-block rounded-full border border-ink/25 text-ink text-sm font-medium px-8 py-3.5 hover:border-ink transition-colors"
          >
            {EXPERTS.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
