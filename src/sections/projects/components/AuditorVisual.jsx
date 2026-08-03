const DocumentRow = ({ width, active }) => (
  <div className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] p-3">
    <div className={`h-8 w-8 shrink-0 rounded-md ${active ? 'bg-electric/20' : 'bg-white/[0.05]'}`} />
    <div className="flex-1 space-y-2">
      <div className="h-1.5 rounded-full bg-slate-700" style={{ width }} />
      <div className="h-1.5 w-2/5 rounded-full bg-slate-800" />
    </div>
    {active && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
  </div>
)

function AuditorVisual({ title, subtitle, status, metricLabel, metricValue, documentWidths }) {
  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0B0F17]/95 p-4 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover/card:scale-[1.02] sm:p-5">
        <div className="mb-5 flex items-center justify-between border-b border-white/[0.07] pb-4">
          <div>
            <p className="text-xs font-semibold text-white">{title}</p>
            <p className="mt-1 text-[10px] text-slate-500">{subtitle}</p>
          </div>
          <span className="rounded-md bg-blue-400/10 px-2 py-1 font-mono text-[9px] text-blue-300">{status}</span>
        </div>
        <div className="space-y-2.5">
          {documentWidths.map((width, index) => <DocumentRow key={width} width={width} active={index === 0} />)}
        </div>
        <div className="mt-4 rounded-lg border border-electric/15 bg-electric/[0.06] p-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-slate-500">{metricLabel}</p>
              <p className="mt-1 font-mono text-xl font-semibold text-white">{metricValue}</p>
            </div>
            <div className="flex h-9 items-end gap-1" aria-hidden="true">
              {[35, 52, 46, 70, 64, 88, 100].map((height, index) => (
                <span key={index} className="w-1.5 rounded-sm bg-electric" style={{ height: `${height}%`, opacity: 0.35 + index * 0.09 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditorVisual
