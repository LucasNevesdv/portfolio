export const heroData = {
  name: 'Lucas Neves',
  badge: {
    role: 'Backend Developer',
    availability: 'Disponível para projetos',
  },
  heading: {
    lead: 'Transformando ideias em',
    highlight: 'soluções de alto impacto.',
  },
  description:
    'Sou acadêmico de Sistemas de Informação na UFLA e desenvolvedor focado em Backend. Construo soluções robustas através de código limpo e arquitetura eficiente.',
  actions: {
    projects: { label: 'Explorar projetos', href: '#projetos' },
    contact: { label: 'Entrar em contato', href: '#contato' },
    about: { label: 'Conhecer trajetória', href: '#sobre' },
  },
  social: {
    github: { label: 'GitHub', href: 'https://github.com/LucasNevesdv' },
  },
  floatingTags: {
    runtime: 'React + Node.js',
    database: 'PostgreSQL',
    architecture: 'Clean Architecture',
  },
  codeMockup: {
    filename: 'auditor-fiscal.ts',
    sample: {
      resultType: 'ValidationResult',
      validField: 'isValid',
      issuesField: 'issues',
      functionName: 'validateDocument',
      serviceName: 'fiscalRules',
      methodName: 'validate',
    },
    metrics: [
      { label: 'Regras validadas', value: 98 },
      { label: 'Cobertura documental', value: 94, color: 'bg-cyan-400' },
    ],
  },
}
