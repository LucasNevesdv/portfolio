function SocialButton({ icon, text, href, ariaLabel = text }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <span className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5">
        {icon}
      </span>
      <span>{text}</span>
    </a>
  )
}

export default SocialButton
