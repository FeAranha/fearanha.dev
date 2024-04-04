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
      revalidate: 60 * 60, // 1 hour
    },
  })
  const project = await response.json()

  return project
}

export default async function Projects({ params }: ProductProps) {
  const project = await getProject(params.slug)

  return (
    <div className="">
      <h1 className="">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}
