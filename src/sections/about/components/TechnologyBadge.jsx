function TechnologyBadge({ name, icon, accent = '#3B82F6' }) {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-electric/35 hover:bg-electric/[0.06]">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-[#0B0F17] font-mono text-xs font-bold shadow-inner"
        style={{ color: accent }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
        {name}
      </span>
    </li>
  )
}

export default TechnologyBadge
