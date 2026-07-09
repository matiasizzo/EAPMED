import { FEATURES } from '@/content/site'

const ICONS: Record<string, React.ReactNode> = {
  laptop: <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9H4V6zM2 18h20v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />,
  stethoscope: <path d="M5 3v6a5 5 0 0 0 10 0V3M10 14v3a5 5 0 0 0 10 0v-2m0 0a2 2 0 1 0 0-.01" />,
  certificate: <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 0v6l-3-2-3 2m6-6 3 6 3-2" />,
  chat: <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />,
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />,
  community: <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m18 0v-2a4 4 0 0 0-3-3.87M15 3.13a4 4 0 0 1 0 7.75M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
}

export default function Features() {
  return (
    <section id="metodologia" className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
          {FEATURES.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy mb-5">
          {FEATURES.title}
        </h2>
        <p className="text-lg text-ink-soft leading-relaxed">{FEATURES.subtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-paper border border-line p-8 hover:shadow-lg hover:shadow-navy/5 transition-shadow"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-soft text-teal flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                {ICONS[item.icon]}
              </svg>
            </div>
            <h3 className="font-medium text-lg text-navy mb-3">{item.title}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
