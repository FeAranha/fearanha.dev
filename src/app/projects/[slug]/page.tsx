import { api } from '@/data/api'

interface Projects {
  title: string
  description: string
  url: string
  problem: string
  task: string
  solution: string
  icon: string
  active: boolean
  slug: string
}

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProject(slug: string): Promise<Projects> {
  const response = await api(`/projects/${slug}`, {
    next: {
      revalidate: 1, // 60 * 60, // 1 hour
    },
  })

  const project = await response.json()

  return project
}

export default async function Projects({ params }: ProductProps) {
  const project = await getProject(params.slug)
  return (
    <div className="space-y-5">
      <h2 className="text-2xl text-tuna-100 font-bold">{project.title}</h2>
      <p className="text-justify">{project.description}</p>
      <h2 className="text-2xl text-tuna-100 font-bold">Problema</h2>
      <p className="text-justify">{project.problem}</p>
      <h2 className="text-2xl text-tuna-100 font-bold">Tarefa</h2>
      <p className="text-justify">{project.task}</p>
      <h2 className="text-2xl text-tuna-100 font-bold">Solução</h2>
      <p className="text-justify">{project.solution}</p>
    </div>
  )
}
