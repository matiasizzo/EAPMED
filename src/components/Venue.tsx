import Image from 'next/image'
import { VENUE } from '@/content/site'

export default function Venue() {
  return (
    <section id="sede" className="relative bg-bg-soft overflow-hidden">
      {/* Resplandor azul de la maqueta */}
      <div className="pointer-events-none absolute -left-40 top-1/3 w-[480px] h-[480px] rounded-full bg-cyan/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-medium leading-snug text-cyan mb-4">
            {VENUE.title}
          </h2>
          <p className="text-sm text-white/80 mb-5">{VENUE.address}</p>
          <p className="text-mist leading-relaxed max-w-md">{VENUE.description}</p>
        </div>

        {/* Collage de fotos de la sede */}
        <div className="grid grid-cols-3 gap-3">
          {VENUE.images.map((src, i) => (
            <div
              key={src}
              className={`relative rounded-xl overflow-hidden ${
                i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <Image
                src={src}
                alt={`${VENUE.title} — foto ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 16vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
