import Link from 'next/link'
import { SITE, FOOTER } from '@/content/site'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-9 h-9 rounded-full bg-paper text-navy flex items-center justify-center font-display text-lg">
              E
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg tracking-wide">{SITE.name}</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-paper/50">
                {SITE.fullName}
              </span>
            </span>
          </div>
          <p className="text-sm text-paper/60 leading-relaxed max-w-xs mb-5">{FOOTER.description}</p>
          <p className="text-sm text-paper/60">{SITE.email}</p>
          <p className="text-sm text-paper/60">{SITE.address}</p>
        </div>

        {FOOTER.columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-5">{col.title}</h3>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 hover:text-paper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} {SITE.fullName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-paper/40">Pago seguro gestionado por Stripe</p>
        </div>
      </div>
    </footer>
  )
}
