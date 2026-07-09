import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EAPMED — Academia Europea de Medicina | Curso Online',
  description:
    'Formación médica online de nivel europeo. Curso con casos clínicos reales, tutorías con especialistas y certificación de la Academia Europea de Medicina.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
