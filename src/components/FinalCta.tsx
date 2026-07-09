import Image from 'next/image'
import Link from 'next/link'
import { FINAL_CTA } from '@/content/site'

export default function FinalCta() {
  return (
    <section id="contacto" className="bg-bg">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-20 lg:pt-28 pb-16 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug max-w-3xl mx-auto mb-9">
          {FINAL_CTA.textLead} <span className="text-cyan">{FINAL_CTA.textHighlight}</span>{' '}
          {FINAL_CTA.textTail}
        </h2>
        <Link
          href="/checkout"
          className="inline-block rounded-full bg-white text-ink text-sm font-medium px-9 py-3.5 hover:bg-gold transition-colors"
        >
          {FINAL_CTA.cta}
        </Link>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-0">
        <div className="relative aspect-[21/9] rounded-t-3xl overflow-hidden">
          <Image
            src={FINAL_CTA.image}
            alt=""
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
