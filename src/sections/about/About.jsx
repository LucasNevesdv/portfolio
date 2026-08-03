import SectionHeading from '../../components/ui/SectionHeading'
import AboutNarrative from './components/AboutNarrative'
import TechnologyGrid from './components/TechnologyGrid'
import { aboutSection } from './aboutData'

function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-white/[0.06] bg-background px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-electric/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          {...aboutSection}
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <AboutNarrative />
          <TechnologyGrid />
        </div>
      </div>
    </section>
  )
}

export default About
