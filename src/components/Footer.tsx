import Link from 'next/link'
import { SITE, NAV_LINKS, SOCIALS } from '@/content/site'
import SocialIcon from '@/components/SocialIcon'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full border border-gold/60 text-gold flex items-center justify-center font-display text-lg">
              E
            </span>
            <span className="font-display text-lg tracking-[0.14em] text-white">{SITE.name}</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-mist order-3 sm:order-1">
            {SITE.name} © {new Date().getFullYear()} · {SITE.fullName}
          </p>

          <nav className="flex flex-wrap justify-center gap-6 order-1 sm:order-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-mist hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 order-2 sm:order-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-line text-mist flex items-center justify-center hover:text-white hover:border-mist transition-colors"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
