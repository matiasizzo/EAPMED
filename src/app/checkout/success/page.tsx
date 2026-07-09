import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-14 h-14 rounded-full bg-teal-soft flex items-center justify-center mx-auto mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-teal">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="font-display text-4xl text-navy mb-4">¡Inscripción confirmada!</h1>
          <p className="text-sm text-ink-soft leading-relaxed mb-10">
            Gracias por inscribirte en el curso de la Academia Europea de Medicina. Stripe te enviará
            el recibo por email y en breve recibirás las credenciales de acceso al campus virtual.
          </p>

          <Link
            href="/"
            className="block w-full rounded-full bg-navy text-paper text-sm font-medium py-4 hover:bg-navy-soft transition-colors"
          >
            Volver a la web
          </Link>
        </div>
      </main>
    </>
  )
}
