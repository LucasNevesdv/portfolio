import ActionButton from '../../components/ui/ActionButton'
import BadgeStatus from './components/BadgeStatus'
import CodeMockup from './components/CodeMockup'
import FloatingTag from './components/FloatingTag'
import SocialButton from './components/SocialButton'
import { heroData } from './heroData'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.69 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.99 10.99 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.64 1.59.24 2.76.12 3.06a4.47 4.47 0 0 1 1.19 3.1c0 4.41-2.72 5.38-5.3 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
)

const BracesIcon = () => <span className="font-mono text-sm">{'{ }'}</span>
const DatabaseIcon = () => <span className="text-sm">◉</span>
const SparkIcon = () => <span className="text-sm">✦</span>

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-background px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-electric/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-electric-dark/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="max-w-3xl">
          <BadgeStatus {...heroData.badge} />

          <h1 className="text-glow-blue mt-6 bg-gradient-to-r from-blue-200 via-electric to-blue-600 bg-clip-text text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] text-transparent sm:text-7xl lg:text-8xl">
            {heroData.name}
          </h1>

          <p className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            {heroData.heading.lead}{' '}
            <span className="bg-gradient-to-r from-slate-100 via-blue-200 to-electric bg-clip-text text-transparent">
              {heroData.heading.highlight}
            </span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {heroData.description}
          </p>

          <nav className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" aria-label="Navegação principal da apresentação">
            <ActionButton href={heroData.actions.projects.href} variant="glow" icon={<ArrowIcon />}>
              {heroData.actions.projects.label}
            </ActionButton>
            <ActionButton href={heroData.actions.contact.href} variant="outline">
              {heroData.actions.contact.label}
            </ActionButton>
            <ActionButton href={heroData.actions.about.href} variant="ghost">
              {heroData.actions.about.label}
            </ActionButton>
          </nav>

          <div className="mt-9 flex items-center gap-6 border-t border-white/[0.07] pt-6">
            <SocialButton
              href={heroData.social.github.href}
              text={heroData.social.github.label}
              icon={<GithubIcon />}
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mr-0">
          <div className="absolute -inset-10 rounded-full bg-electric/10 blur-3xl" aria-hidden="true" />
          <FloatingTag icon={<BracesIcon />} position="-left-10 top-12">
            {heroData.floatingTags.runtime}
          </FloatingTag>
          <FloatingTag icon={<DatabaseIcon />} position="-right-8 top-1/3">
            {heroData.floatingTags.database}
          </FloatingTag>
          <FloatingTag icon={<SparkIcon />} position="bottom-10 -left-8">
            {heroData.floatingTags.architecture}
          </FloatingTag>
          <CodeMockup {...heroData.codeMockup} />
        </div>
      </div>
    </section>
  )
}

export default Hero
