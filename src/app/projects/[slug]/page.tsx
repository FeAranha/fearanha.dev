import { api } from '@/data/api'
import { notFound } from 'next/navigation'
import React from 'react'

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
  try {
    const response = await api(`/projects/${slug}`, {
      next: {
        revalidate: 1, // 60 * 60, // 1 hour
      },
    })

    if (!response.ok) {
      console.error(
        'Failed to fetch project:',
        response.status,
        response.statusText,
      )
      notFound()
    }

    const project = await response.json()
    return project
  } catch (error) {
    console.error('Error fetching projects', error)
    throw error
  }
}

const Projects: React.FC<ProductProps> = async ({ params }) => {
  const project = await getProject(params.slug)

  return (
    <div className="lg:ml-36 2xl:ml-0 space-y-5 max-w-[760px] mb-10">
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

export default Projects
