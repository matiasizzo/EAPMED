import Link from 'next/link'
import { PRICING } from '@/content/site'
import { COURSE, formatPrice } from '@/lib/course'

export default function Pricing() {
  return (
    <section id="inscripcion" className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
          {PRICING.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy mb-5">
          {PRICING.title}
        </h2>
        <p className="text-lg text-ink-soft leading-relaxed">{PRICING.subtitle}</p>
      </div>

      <div className="max-w-lg mx-auto rounded-3xl bg-navy text-paper p-9 lg:p-12 shadow-2xl shadow-navy/25">
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{COURSE.name}</p>
        <div className="flex items-baseline gap-2 mb-8">
          <span className="font-display text-5xl lg:text-6xl">{formatPrice(COURSE.priceCents)}</span>
          <span className="text-sm text-paper/60">pago único</span>
        </div>

        <ul className="space-y-3.5 mb-9">
          {PRICING.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-paper/85">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="9" />
                <path d="m10 12 2 2 4-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/checkout"
          className="block w-full rounded-full bg-paper text-navy text-sm font-semibold text-center py-4 hover:bg-gold-soft transition-colors"
        >
          {PRICING.cta}
        </Link>

        <p className="text-xs text-paper/50 text-center mt-5 leading-relaxed">{PRICING.guarantee}</p>
      </div>
    </section>
  )
}
