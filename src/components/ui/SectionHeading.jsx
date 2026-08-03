function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <header className={`flex flex-col ${alignment}`}>
      <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-electric">
        <span className="h-px w-8 bg-electric" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
          {description}
        </p>
      )}
    </header>
  )
}

export default SectionHeading
