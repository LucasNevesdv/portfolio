import ActionButton from '../../../components/ui/ActionButton'
import ProjectTag from './ProjectTag'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.69 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.99 10.99 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.64 1.59.24 2.76.12 3.06a4.47 4.47 0 0 1 1.19 3.1c0 4.41-2.72 5.38-5.3 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5m0-5-9 9M19 13v6H5V5h6" />
  </svg>
)

function ProjectCard({ project }) {
  const { title, description, technologies, repositoryUrl, liveUrl, featured, status, visual } = project
  const statusTone = status?.tone === 'stable'
    ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.55)]'
    : 'bg-slate-400'

  return (
    <article className={`group/card relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080B12]/85 transition-all duration-300 hover:-translate-y-1 hover:border-electric/35 hover:shadow-[0_20px_70px_-30px_rgba(59,130,246,0.45)] ${featured ? 'md:col-span-2 xl:col-span-3' : ''}`}>
      <div className={`grid h-full ${featured ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-electric">
              {featured ? 'Projeto em destaque' : 'Projeto'}
            </span>
            <span className="inline-flex items-center gap-2 text-[11px] text-slate-500">
              <span className={`h-1.5 w-1.5 rounded-full ${statusTone}`} />
              {status?.label ?? 'Projeto'}
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-[-0.025em] text-white sm:text-3xl">{title}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologias usadas em ${title}`}>
            {technologies.map((technology) => <ProjectTag key={technology}>{technology}</ProjectTag>)}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-9">
            {liveUrl && (
              <ActionButton href={liveUrl} target="_blank" rel="noreferrer" variant="glow" icon={<ExternalIcon />}>
                Acessar aplicação
              </ActionButton>
            )}
            {repositoryUrl && (
              <ActionButton href={repositoryUrl} target="_blank" rel="noreferrer" variant="outline" icon={<GithubIcon />}>
                Ver código
              </ActionButton>
            )}
          </div>
        </div>

        {visual && (
          <div className="relative min-h-72 overflow-hidden border-t border-white/[0.07] bg-[#06080D] p-6 lg:min-h-full lg:border-l lg:border-t-0 sm:p-8">
            <div className="absolute inset-0 bg-grid bg-grid opacity-40 [mask-image:linear-gradient(to_bottom_right,black,transparent)]" />
            {visual}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
