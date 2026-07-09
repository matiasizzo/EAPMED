'use client'

import { useState } from 'react'
import { CURRICULUM } from '@/content/site'

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="programa" className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            {CURRICULUM.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-paper mb-5">
            {CURRICULUM.title}
          </h2>
          <p className="text-lg text-paper/70 leading-relaxed">{CURRICULUM.subtitle}</p>
        </div>

        <div className="space-y-3">
          {CURRICULUM.modules.map((mod, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={mod.number}
                className="rounded-2xl border border-paper/15 bg-paper/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 px-6 py-5 text-left"
                >
                  <span className="font-display text-xl text-gold w-10 shrink-0">{mod.number}</span>
                  <span className="flex-1 text-paper font-medium">{mod.title}</span>
                  <span className="hidden sm:block text-sm text-paper/50">{mod.duration}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`text-paper/60 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="px-6 pb-6 pl-[5.25rem] space-y-2.5">
                    {mod.lessons.map((lesson) => (
                      <li key={lesson} className="flex items-center gap-3 text-sm text-paper/70">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal shrink-0">
                          <circle cx="12" cy="12" r="9" />
                          <path d="m10 12 2 2 4-5" />
                        </svg>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
