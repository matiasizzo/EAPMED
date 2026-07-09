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
          <button onClick={onEditStudent} className="text-mist hover:text-white transition-colors">
            Datos
          </button>
          <span className="text-mist">›</span>
          <span className="text-white font-medium">Pago</span>
        </div>

        {/* Resumen de datos del alumno */}
        <div className="border border-line bg-panel rounded-2xl divide-y divide-line mb-8 text-sm">
          <div className="flex justify-between px-5 py-3.5 text-mist">
            <span>Asistente</span>
            <span className="text-white">{student.name}</span>
          </div>
          <div className="flex justify-between px-5 py-3.5 text-mist">
            <span>Email</span>
            <span className="text-white">{student.email}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="font-display text-2xl text-white mb-2">Pago</h2>
          <p className="text-xs text-mist -mt-3">
            Todas las transacciones son seguras y están encriptadas.
          </p>

          <PaymentElement options={{ layout: 'tabs', fields: { billingDetails: 'never' } }} />

          {error && <p className="text-sm text-red bg-red/10 rounded-xl px-4 py-3">{error}</p>}

          <button
            type="submit"
            disabled={!stripe || !elements || paying}
            className="w-full rounded-full bg-white text-ink text-sm font-medium py-4 hover:bg-gold transition-colors disabled:opacity-50"
          >
            {paying ? 'Procesando...' : `Pagar ${formatPrice(totalCentsFromServer)}`}
          </button>

          <p className="text-xs text-mist text-center">
            Pago seguro gestionado por Stripe · Recibirás el recibo en {student.email}
          </p>
        </form>
      </div>

      {/* Resumen del pedido */}
      <aside className="lg:border-l lg:border-line lg:pl-12 h-fit">
        <h2 className="text-xs uppercase tracking-[0.18em] text-mist mb-5">Tu inscripción</h2>
        <div className="rounded-2xl bg-panel border border-line p-7">
          <p className="font-display text-xl text-white mb-1">{COURSE.name}</p>
          <p className="text-xs text-mist mb-6">Acceso completo · Pago único</p>
          <div className="flex justify-between items-baseline pt-5 border-t border-line">
            <span className="text-sm text-mist">Total</span>
            <div className="text-right">
              <span className="text-xs text-mist mr-1.5">EUR</span>
              <span className="font-display text-2xl text-white">{formatPrice(totalCentsFromServer)}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
