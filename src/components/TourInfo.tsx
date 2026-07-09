import Image from 'next/image'
import Link from 'next/link'
import { TOUR } from '@/content/site'

export default function TourInfo() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug max-w-3xl mx-auto mb-16 lg:mb-24">
          {TOUR.titleLead}{' '}
          <span className="text-cyan">{TOUR.titleHighlight}</span>{' '}
          <span className="text-white">{TOUR.titleYear}</span>
        </h2>

        <div className="space-y-16 lg:space-y-24">
          {TOUR.rows.map((row) => (
            <div
              key={row.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                row.imageSide === 'left' ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <h3 className="font-medium text-2xl lg:text-3xl leading-snug mb-4">{row.title}</h3>
                {row.description && (
                  <p className="text-mist leading-relaxed max-w-md">{row.description}</p>
                )}
                {'link' in row && row.link && (
                  <Link
                    href={row.link.href}
                    className="inline-flex items-center gap-2 text-sm text-cyan hover:text-white transition-colors mt-6"
                  >
                    {row.link.label}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </Link>
                )}
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src={row.image}
                  alt={row.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
