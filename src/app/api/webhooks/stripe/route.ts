import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch {
    return NextResponse.json({ error: 'Webhook signature invalid' }, { status: 400 })
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object
    const meta = pi.metadata

    // Inscripción confirmada. Stripe envía el recibo al alumno (receipt_email).
    // TODO: dar de alta al alumno en el campus / enviar credenciales de acceso.
    console.log('Inscripción pagada', {
      paymentIntentId: pi.id,
      amountCents: pi.amount,
      courseId: meta.course_id,
      studentName: meta.student_name,
      studentEmail: meta.student_email,
    })
  }

  return NextResponse.json({ received: true })
}
