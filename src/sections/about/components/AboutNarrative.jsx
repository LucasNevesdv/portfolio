import HighlightCard from './HighlightCard'
import { educationJourney, highlights, profile } from '../aboutData'

const icons = {
  layers: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3-9 5 9 5 9-5-9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  ),
  target: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" d="m15 9 6-6" />
    </svg>
  ),
}

function AboutNarrative() {
  return (
    <div>
      <div className="space-y-5 text-base leading-8 text-slate-400">
        {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <ol className="mt-8 grid gap-3" aria-label="Trajetória acadêmica">
        {educationJourney.map((step, index) => (
          <li key={step.institution} className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-electric/10 font-mono text-xs font-semibold text-electric">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-200">{step.institution}</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <HighlightCard key={item.title} icon={icons[item.icon]} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
}

export default AboutNarrative
