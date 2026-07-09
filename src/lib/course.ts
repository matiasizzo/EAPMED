/*
 * Datos del curso (placeholders).
 * El importe se define aquí, en el servidor: el cliente nunca envía el precio.
 */
export const COURSE = {
  id: 'curso-eapmed-2026',
  name: 'Curso Online — Academia Europea de Medicina',
  // Precio en céntimos de euro. Placeholder: ajustar al precio real.
  priceCents: 49900,
  currency: 'eur' as const,
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100)
}
