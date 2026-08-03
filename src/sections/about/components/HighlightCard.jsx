function HighlightCard({ icon, title, description }) {
  return (
    <article className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-electric/20 bg-electric/10 text-electric">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </article>
  )
}

export default HighlightCard
