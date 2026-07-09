import Stripe from 'stripe'

let _stripe: Stripe | null = null

/*
 * Inicialización perezosa: el cliente se crea en la primera petición,
 * no al cargar el módulo, para que `next build` no exija STRIPE_SECRET_KEY.
 */
export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Falta la variable de entorno STRIPE_SECRET_KEY')
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-06-24.dahlia',
    })
  }
  return _stripe
}
