import { contactData } from '../contactData'

function Footer() {
  const { copyright, signature } = contactData.footer

  return (
    <footer className="border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
        <p>{copyright}</p>
        <p>
          {signature}
          <span className="ml-2 text-electric" aria-hidden="true">✦</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
