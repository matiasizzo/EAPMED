import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { COURSE } from '@/lib/course'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  const { student } = (await req.json()) as {
    student: {
      name: string
      email: string
    }
  }

  if (!student?.name?.trim()) {
    return NextResponse.json({ error: 'El nombre es obligatorio' }, { status: 400 })
  }
  if (!student?.email || !EMAIL_RE.test(student.email)) {
    return NextResponse.json({ error: 'Introduce un email válido' }, { status: 400 })
  }

  // El importe se calcula siempre en el servidor: un solo curso, sin carrito.
  const totalCents = COURSE.priceCents

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalCents,
    currency: COURSE.currency,
    automatic_payment_methods: { enabled: true },
    // Stripe envía el recibo de confirmación a este email al completarse el pago.
    receipt_email: student.email,
    metadata: {
      course_id: COURSE.id,
      course_name: COURSE.name,
      student_name: student.name.trim(),
      student_email: student.email,
    },
  })

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
    totalCents,
  })
}
