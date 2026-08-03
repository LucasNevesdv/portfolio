import SectionHeading from '../../components/ui/SectionHeading'
import ContactActions from './components/ContactActions'
import Footer from './components/Footer'
import { contactData } from './contactData'

function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/[0.06] bg-background">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-2/3 -translate-x-1/2 rounded-full bg-electric/[0.07] blur-[110px]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <SectionHeading
          eyebrow={contactData.section.eyebrow}
          title={contactData.section.title}
          description={contactData.section.description}
          align="center"
        />

        <div className="mt-10 w-full">
          <ContactActions />
        </div>

        <p className="mt-7 flex items-center gap-2 text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          {contactData.section.responseTime}
        </p>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </section>
  )
}

export default Contact
