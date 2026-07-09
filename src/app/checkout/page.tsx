'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Navbar from '@/components/Navbar'
import StudentForm from '@/components/StudentForm'
import PaymentForm from '@/components/PaymentForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export interface StudentDetails {
  name: string
  email: string
}

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [student, setStudent] = useState<StudentDetails | null>(null)
  const [serverTotal, setServerTotal] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleStudentConfirmed(details: StudentDetails) {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student: details }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Error del servidor')
      setStudent(details)
      setClientSecret(data.clientSecret)
      setServerTotal(data.totalCents)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  function handleEditStudent() {
    setClientSecret(null)
    setStudent(null)
  }

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Paso 1: datos del alumno — no necesita Elements */}
        {!clientSecret && (
          <StudentForm onConfirmed={handleStudentConfirmed} loading={loading} error={error} />
        )}

        {/* Paso 2: pago — envuelto en Elements */}
        {clientSecret && student && (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: 'flat',
                variables: {
                  colorPrimary: '#0c2340',
                  colorBackground: '#ffffff',
                  colorText: '#101828',
                  colorDanger: '#dc2626',
                  fontFamily: 'Inter, sans-serif',
                  borderRadius: '10px',
                  fontSizeBase: '14px',
                },
                rules: {
                  '.Input': { border: '1px solid #e4e7ec', padding: '12px 16px', backgroundColor: '#ffffff' },
                  '.Input:focus': { border: '1px solid #0c2340', boxShadow: 'none' },
                  '.Label': { fontSize: '12px', letterSpacing: '0.04em', color: '#475467', marginBottom: '6px' },
                  '.Tab': { border: '1px solid #e4e7ec', borderRadius: '10px' },
                  '.Tab--selected': { border: '1px solid #0c2340' },
                },
              },
            }}
          >
            <PaymentForm
              clientSecret={clientSecret}
              student={student}
              onEditStudent={handleEditStudent}
              totalCentsFromServer={serverTotal}
            />
          </Elements>
        )}
      </main>
    </>
  )
}
