import Link from 'next/link'
import { FINAL_CTA } from '@/content/site'

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
      <div className="rounded-3xl bg-gradient-to-br from-navy via-navy-soft to-teal text-paper text-center px-8 py-16 lg:py-20">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 max-w-3xl mx-auto">
          {FINAL_CTA.title}
        </h2>
        <p className="text-lg text-paper/75 leading-relaxed max-w-2xl mx-auto mb-9">
          {FINAL_CTA.subtitle}
        </p>
        <Link
          href="/checkout"
          className="inline-block rounded-full bg-paper text-navy text-sm font-semibold px-10 py-4 hover:bg-gold-soft transition-colors"
        >
          {FINAL_CTA.cta}
        </Link>
      </div>
    </section>
  )
}
