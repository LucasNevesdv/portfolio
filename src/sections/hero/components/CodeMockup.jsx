const Metric = ({ label, value, color = 'bg-electric' }) => (
  <div>
    <div className="mb-2 flex items-center justify-between text-[11px]">
      <span className="text-slate-500">{label}</span>
      <span className="font-mono text-slate-300">{value}%</span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
)

function CodeMockup({ filename, sample, metrics }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080B12]/95 shadow-2xl shadow-black/50">
      <div className="flex h-12 items-center border-b border-white/[0.07] px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[11px] text-slate-500">
          {filename}
        </span>
      </div>

      <div className="overflow-x-auto p-5 font-mono text-xs leading-6 sm:p-7 sm:text-[13px]">
        <pre aria-label="Exemplo de código TypeScript">
          <code>
            <span className="text-fuchsia-400">interface</span>{' '}
            <span className="text-cyan-300">{sample.resultType}</span> {'{'}
            {'\n  '}<span className="text-slate-300">{sample.validField}</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-amber-300">boolean</span>
            {'\n  '}<span className="text-slate-300">{sample.issuesField}</span>
            <span className="text-slate-500">:</span>{' '}
            <span className="text-amber-300">string</span>
            <span className="text-slate-500">[]</span>
            {'\n}\n\n'}
            <span className="text-fuchsia-400">const</span>{' '}
            <span className="text-blue-300">{sample.functionName}</span>{' '}
            <span className="text-slate-500">=</span>{' '}
            <span className="text-slate-300">(data)</span>{' '}
            <span className="text-fuchsia-400">=&gt;</span> {'{'}
            {'\n  '}<span className="text-fuchsia-400">return</span>{' '}
            <span className="text-blue-300">{sample.serviceName}</span>
            <span className="text-slate-500">.</span>
            <span className="text-cyan-300">{sample.methodName}</span>
            <span className="text-slate-300">(data)</span>
            {'\n}'}
          </code>
        </pre>
      </div>

      <div className="grid gap-4 border-t border-white/[0.07] bg-white/[0.015] p-5 sm:grid-cols-2 sm:p-6">
        {metrics.map((metric) => <Metric key={metric.label} {...metric} />)}
      </div>
    </div>
  )
}

export default CodeMockup
