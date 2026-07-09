import Image from 'next/image'
import { PARTICIPANTS } from '@/content/site'

export default function Participants() {
  return (
    <section id="temas" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="text-center text-3xl lg:text-4xl font-medium mb-14">
          {PARTICIPANTS.titleLead} <span className="text-cyan">{PARTICIPANTS.titleHighlight}</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {PARTICIPANTS.items.map((item) => (
            <div key={item.label} className="rounded-2xl overflow-hidden">
              <div
                className="px-4 py-3 text-center text-sm font-medium text-ink"
                style={{ backgroundColor: item.color }}
              >
                {item.label}
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
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
