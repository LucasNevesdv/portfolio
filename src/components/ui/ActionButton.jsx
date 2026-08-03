const variants = {
  glow:
    'glow-blue border-electric bg-electric text-white hover:border-blue-400 hover:bg-blue-500',
  outline:
    'border-white/15 bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.07]',
  ghost:
    'border-transparent bg-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white',
}

function ActionButton({
  children,
  href,
  variant = 'glow',
  icon,
  className = '',
  ...props
}) {
  const styles = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-4 focus-visible:ring-offset-background ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
        {icon && <span className="h-4 w-4" aria-hidden="true">{icon}</span>}
      </a>
    )
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
      {icon && <span className="h-4 w-4" aria-hidden="true">{icon}</span>}
    </button>
  )
}

export default ActionButton
