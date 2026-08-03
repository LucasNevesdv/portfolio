import SectionHeading from '../../components/ui/SectionHeading'
import ProjectCard from './components/ProjectCard'
import { projects, projectsSection } from './projectsData'
import { projectVisuals } from './projectVisuals'

function Projects() {
  return (
    <section id="projetos" className="relative overflow-hidden border-t border-white/[0.06] bg-[#06080D] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-2/3 -translate-x-1/2 rounded-full bg-electric/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          {...projectsSection}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const ProjectVisual = projectVisuals[project.visualKey]
            const visual = ProjectVisual ? <ProjectVisual {...project.visualData} /> : null

            return <ProjectCard key={project.id} project={{ ...project, visual }} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
