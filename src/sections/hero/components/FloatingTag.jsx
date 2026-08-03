function FloatingTag({ icon, children, position = '', className = '' }) {
  return (
    <div
      className={`absolute z-20 hidden items-center gap-2 rounded-lg border border-white/10 bg-[#0B0F17]/90 px-3 py-2 text-xs font-medium text-slate-300 shadow-xl shadow-black/30 backdrop-blur-md sm:flex ${position} ${className}`}
    >
      {icon && <span className="text-electric" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </div>
  )
}

export default FloatingTag
