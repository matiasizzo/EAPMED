import { TESTIMONIALS } from '@/content/site'

export default function Testimonials() {
  return (
    <section id="opiniones" className="bg-bg-soft border-y border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
            {TESTIMONIALS.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy">
            {TESTIMONIALS.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.items.map((t) => (
            <figure key={t.quote} className="rounded-2xl bg-paper border border-line p-8 flex flex-col">
              <div className="flex gap-1 mb-5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-ink-soft leading-relaxed flex-1 mb-6">
                “{t.quote}”
              </blockquote>
              <figcaption>
                <p className="text-sm font-medium text-navy">{t.name}</p>
                <p className="text-xs text-ink-mute">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
