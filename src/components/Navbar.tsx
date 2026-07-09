'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE, NAV_LINKS } from '@/content/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-navy text-paper flex items-center justify-center font-display text-lg">
            E
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg text-navy tracking-wide">{SITE.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-ink-mute">
              {SITE.fullName}
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/checkout"
            className="rounded-full bg-navy text-paper text-sm px-6 py-2.5 hover:bg-navy-soft transition-colors"
          >
            Inscribirme
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-soft hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="rounded-full bg-navy text-paper text-sm px-6 py-2.5 text-center hover:bg-navy-soft transition-colors"
          >
            Inscribirme
          </Link>
        </div>
      )}
    </header>
  )
}
