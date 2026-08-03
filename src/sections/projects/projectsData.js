export const projectsSection = {
  eyebrow: 'Projetos selecionados',
  title: 'Soluções que saíram do código para o mundo.',
  description:
    'Produtos desenvolvidos com foco em problemas concretos, escolhas técnicas conscientes e experiências que funcionam de ponta a ponta.',
}

export const projects = [
  {
    id: 'auditor-fiscal',
    title: 'Auditor Fiscal',
    description:
      'Uma plataforma desenvolvida como case de portfólio para identificar fragilidades fiscais em documentos de empresas, aplicando regras de validação estruturadas através de uma arquitetura limpa e desacoplada.',
    technologies: ['Node.js', 'Express', 'React', 'Vite', 'PostgreSQL'],
    liveUrl: 'https://auditor-ia-txzw.onrender.com',
    repositoryUrl: 'https://github.com/LucasNevesdv/auditor-ia',
    featured: true,
    status: { label: 'Concluído', tone: 'stable' },
    visualKey: 'auditor-fiscal',
    visualData: {
      title: 'Validação de regras',
      subtitle: 'Processamento de regras fiscais',
      status: 'CONCLUÍDO',
      metricLabel: 'Regras processadas',
      metricValue: '24/24',
      documentWidths: ['76%', '58%', '68%'],
    },
  },
]
