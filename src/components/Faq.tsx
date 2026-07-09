'use client'

import { useState } from 'react'
import { FAQ } from '@/content/site'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-bg-soft border-y border-line">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
            {FAQ.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy">
            {FAQ.title}
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question} className="rounded-2xl bg-paper border border-line overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-navy">{item.question}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`text-ink-mute shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 text-sm text-ink-soft leading-relaxed">{item.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
