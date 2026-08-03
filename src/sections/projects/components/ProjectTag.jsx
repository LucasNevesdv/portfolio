function ProjectTag({ children }) {
  return (
    <li className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 font-mono text-[10px] font-medium text-slate-400 transition-colors group-hover/card:border-electric/20 group-hover/card:text-slate-300">
      {children}
    </li>
  )
}

export default ProjectTag
