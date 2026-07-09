# EAPMED — Academia Europea de Medicina

Web informativa y de venta del curso online de la Academia Europea de Medicina.
Next.js 15 (App Router) + Tailwind CSS 4 + TypeScript, con pago embebido de Stripe
(Payment Element) siguiendo el patrón de `dallo-selfcare`.

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # y rellenar las claves de Stripe
npm run dev
```

## Variables de entorno

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Clave publicable de Stripe (cliente) |
| `STRIPE_SECRET_KEY` | Clave secreta de Stripe (servidor) |
| `STRIPE_WEBHOOK_SECRET` | Secreto de firma del webhook (`whsec_...`) |

## Flujo de pago

1. `/checkout` — el alumno introduce nombre y email.
2. `POST /api/checkout/create-intent` — crea el `PaymentIntent` con el importe
   calculado **en el servidor** (`src/lib/course.ts`) y `receipt_email` activado,
   para que Stripe envíe la confirmación por email.
3. Payment Element embebido — el alumno paga sin salir de la web.
4. `/checkout/success` — página de confirmación (URL de retorno de Stripe).
5. `POST /api/webhooks/stripe` — verifica la firma y procesa
   `payment_intent.succeeded` (punto de integración para dar de alta al alumno).

Para probar el webhook en local:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Contenido y diseño

- **Textos y secciones**: todo el copy vive en `src/content/site.ts` (placeholders).
- **Precio y datos del curso**: `src/lib/course.ts` (placeholder: 499 €).
- **Colores y tipografías**: tokens en `src/app/globals.css` (`@theme` de Tailwind 4).

Para calcar la maqueta de Framer basta con ajustar esos tres archivos sin tocar
los componentes.
