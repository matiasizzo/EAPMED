const PATHS: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  facebook: <path d="M14 8h2.5V4.5H14c-2.2 0-4 1.8-4 4V11H7.5v3.5H10v5h3.5v-5h2.5l.5-3.5h-3V8.5c0-.3.2-.5.5-.5z" />,
  linkedin: (
    <>
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v1" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5z" fill="currentColor" />
    </>
  ),
}

export default function SocialIcon({ name }: { name: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {PATHS[name]}
    </svg>
  )
}
