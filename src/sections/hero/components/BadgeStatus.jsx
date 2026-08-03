function BadgeStatus({ role, availability }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-xs">
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <span>{role}</span>
      <span className="text-slate-600" aria-hidden="true">
        •
      </span>
      <span className="normal-case tracking-normal text-slate-400">
        {availability}
      </span>
    </div>
  )
}

export default BadgeStatus
