import TechnologyBadge from './TechnologyBadge'
import { technologies, technologySection } from '../aboutData'

function TechnologyGrid() {
  return (
    <div className="relative rounded-2xl border border-white/[0.08] bg-[#080B12]/80 p-5 shadow-2xl shadow-black/20 sm:p-7">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent" />
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-electric">
            {technologySection.eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{technologySection.title}</h3>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
          {technologySection.status}
        </span>
      </div>

      <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
        {technologies.map((technology) => (
          <TechnologyBadge key={technology.name} {...technology} />
        ))}
      </ul>
    </div>
  )
}

export default TechnologyGrid
