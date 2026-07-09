import Image from 'next/image'
import { INSTRUCTORS } from '@/content/site'

export default function Instructors() {
  return (
    <section id="profesorado" className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
          {INSTRUCTORS.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy mb-5">
          {INSTRUCTORS.title}
        </h2>
        <p className="text-lg text-ink-soft leading-relaxed">{INSTRUCTORS.subtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSTRUCTORS.items.map((person) => (
          <div key={person.name + person.role} className="rounded-2xl bg-paper border border-line overflow-hidden">
            <div className="relative aspect-[4/3] bg-bg-soft">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl text-navy mb-1">{person.name}</h3>
              <p className="text-xs uppercase tracking-[0.12em] text-teal mb-4">{person.role}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{person.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
