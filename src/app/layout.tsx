import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EAPMED — Vision of the Experts | European Academy of Personalized Medicine',
  description:
    'TOUR EAPMED: Vision of the Experts 2025. Un evento médico dinámico y vanguardista en la Real Academia de Medicina de Cataluña, con más de 40 expertos internacionales.',
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
