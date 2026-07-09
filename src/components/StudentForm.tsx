'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { StudentDetails } from '@/app/checkout/page'
import { COURSE, formatPrice } from '@/lib/course'
import { PRICING } from '@/content/site'

interface Props {
  onConfirmed: (details: StudentDetails) => void
  loading: boolean
  error: string | null
}

export default function StudentForm({ onConfirmed, loading, error }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onConfirmed({ name: name.trim(), email: email.trim() })
  }

  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-[1fr_400px] gap-12">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 mb-8 text-[11px] tracking-[0.2em] uppercase">
          <span className="text-navy font-medium">Datos</span>
          <span className="text-ink-mute">›</span>
          <span className="text-ink-mute">Pago</span>
        </div>

        <h1 className="font-display text-3xl lg:text-4xl text-navy mb-3">Inscripción al curso</h1>
        <p className="text-sm text-ink-soft mb-10">
          Introduce tus datos: usaremos este email para enviarte el recibo y el acceso al campus.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-[0.08em] text-ink-soft mb-2">
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre y apellidos"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink outline-none focus:border-navy transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-[0.08em] text-ink-soft mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink outline-none focus:border-navy transition-colors"
            />
          </div>

          {error && <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-navy text-paper text-sm font-medium py-4 hover:bg-navy-soft transition-colors disabled:opacity-50"
          >
            {loading ? 'Preparando el pago...' : 'Continuar al pago'}
          </button>

          <p className="text-xs text-ink-mute text-center">
            Pago seguro gestionado por Stripe ·{' '}
            <Link href="/" className="underline hover:text-navy">
              Volver a la web
            </Link>
          </p>
        </form>
      </div>

      {/* Resumen del curso */}
      <aside className="lg:border-l lg:border-line lg:pl-12 h-fit">
        <h2 className="text-xs uppercase tracking-[0.18em] text-ink-mute mb-5">Tu inscripción</h2>
        <div className="rounded-2xl bg-paper border border-line p-7">
          <p className="font-display text-xl text-navy mb-1">{COURSE.name}</p>
          <p className="text-xs text-ink-mute mb-6">Acceso completo · Pago único</p>
          <ul className="space-y-2.5 mb-7">
            {PRICING.includes.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-ink-soft">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m10 12 2 2 4-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-baseline pt-5 border-t border-line">
            <span className="text-sm text-ink-soft">Total</span>
            <span className="font-display text-2xl text-navy">{formatPrice(COURSE.priceCents)}</span>
          </div>
        </div>
        <p className="text-xs text-ink-mute leading-relaxed mt-4">{PRICING.guarantee}</p>
      </aside>
    </div>
  )
}
