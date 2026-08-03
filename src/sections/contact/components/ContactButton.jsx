const variants = {
  email: {
    container:
      'border-electric/50 bg-electric text-white shadow-[0_0_28px_rgba(59,130,246,0.22)] hover:border-blue-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.38)]',
    icon: 'bg-white/15 text-white',
  },
  whatsapp: {
    container:
      'border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-50 hover:border-emerald-400/45 hover:bg-emerald-400/[0.13] hover:shadow-[0_0_36px_rgba(52,211,153,0.14)]',
    icon: 'bg-emerald-400/15 text-emerald-300',
  },
}

function ContactButton({ href, label, value, icon, variant = 'email', external = false }) {
  const styles = variants[variant]

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`group flex min-h-20 w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:p-5 ${styles.container}`}
      aria-label={`${label}: ${value}`}
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${styles.icon}`} aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="mt-1 block truncate text-xs opacity-65 sm:text-sm">{value}</span>
      </span>
      <svg className="h-5 w-5 shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </a>
  )
}

export default ContactButton
