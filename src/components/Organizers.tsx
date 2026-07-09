import Image from 'next/image'
import { ORGANIZERS, COORDINATOR } from '@/content/site'

export default function Organizers() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28 space-y-24">
        {/* Organizadores: tarjetas a la izquierda, título a la derecha */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-5 max-w-md">
            {ORGANIZERS.items.map((person) => (
              <div key={person.name}>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-white leading-snug">{person.name}</p>
                <p className="text-xs text-mist mt-1">{person.role}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-medium mb-4">{ORGANIZERS.title}</h2>
            <p className="text-mist leading-relaxed max-w-md">{ORGANIZERS.description}</p>
          </div>
        </div>

        {/* Coordenadora científica: título a la izquierda, foto a la derecha */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl lg:text-4xl font-medium leading-snug">{COORDINATOR.title}</h2>
          <div className="max-w-[220px] lg:justify-self-end">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
              <Image
                src={COORDINATOR.image}
                alt={COORDINATOR.name}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <p className="text-sm font-medium text-white">{COORDINATOR.name}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
