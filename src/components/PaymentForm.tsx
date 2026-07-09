'use client'

import { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import type { StudentDetails } from '@/app/checkout/page'
import { COURSE, formatPrice } from '@/lib/course'

interface Props {
  clientSecret: string
  student: StudentDetails
  onEditStudent: () => void
  totalCentsFromServer: number
}

export default function PaymentForm({ clientSecret, student, onEditStudent, totalCentsFromServer }: Props) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [paying, setPaying] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements) return
    setPaying(true)
    setError(null)

    const { error: submitError } = await elements.submit()
    if (submitError) { setError(submitError.message ?? 'Error'); setPaying(false); return }

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
        payment_method_data: {
          billing_details: {
            name: student.name,
            email: student.email,
          },
        },
      },
    })

    if (confirmError) { setError(confirmError.message ?? 'Error al confirmar el pago'); setPaying(false) }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-[1fr_400px] gap-12">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 mb-8 text-[11px] tracking-[0.2em] uppercase">
          <button onClick={onEditStudent} className="text-ink-mute hover:text-navy transition-colors">
            Datos
          </button>
          <span className="text-ink-mute">›</span>
          <span className="text-navy font-medium">Pago</span>
        </div>

        {/* Resumen de datos del alumno */}
        <div className="border border-line bg-paper rounded-2xl divide-y divide-line mb-8 text-sm">
          <div className="flex justify-between px-5 py-3.5 text-ink-soft">
            <span>Alumno</span>
            <span className="text-navy">{student.name}</span>
          </div>
          <div className="flex justify-between px-5 py-3.5 text-ink-soft">
            <span>Email</span>
            <span className="text-navy">{student.email}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="font-display text-2xl text-navy mb-2">Pago</h2>
          <p className="text-xs text-ink-mute -mt-3">
            Todas las transacciones son seguras y están encriptadas.
          </p>

          <PaymentElement options={{ layout: 'tabs', fields: { billingDetails: 'never' } }} />

          {error && <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>}

          <button
            type="submit"
            disabled={!stripe || !elements || paying}
            className="w-full rounded-full bg-navy text-paper text-sm font-medium py-4 hover:bg-navy-soft transition-colors disabled:opacity-50"
          >
            {paying ? 'Procesando...' : `Pagar ${formatPrice(totalCentsFromServer)}`}
          </button>

          <p className="text-xs text-ink-mute text-center">
            Pago seguro gestionado por Stripe · Recibirás el recibo en {student.email}
          </p>
        </form>
      </div>

      {/* Resumen del pedido */}
      <aside className="lg:border-l lg:border-line lg:pl-12 h-fit">
        <h2 className="text-xs uppercase tracking-[0.18em] text-ink-mute mb-5">Tu inscripción</h2>
        <div className="rounded-2xl bg-paper border border-line p-7">
          <p className="font-display text-xl text-navy mb-1">{COURSE.name}</p>
          <p className="text-xs text-ink-mute mb-6">Acceso completo · Pago único</p>
          <div className="flex justify-between items-baseline pt-5 border-t border-line">
            <span className="text-sm text-ink-soft">Total</span>
            <div className="text-right">
              <span className="text-xs text-ink-mute mr-1.5">EUR</span>
              <span className="font-display text-2xl text-navy">{formatPrice(totalCentsFromServer)}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
