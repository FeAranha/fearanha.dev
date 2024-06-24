import { z } from 'zod'
import items from '@/data/projects.js'

interface Project {
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

interface YearData {
  year: string
  projects: {
    title: string
    description: string
    url: string
    problem: string
    task: string | string[]
    solution: string
    icon: string
    active: boolean
    slug: string
  }[]
}

function normalizeProjects(items: YearData[]): Project[] {
  return items.flatMap((yearData) => {
    return yearData.projects.map((project) => {
      return {
        ...project,
        task:
          typeof project.task === 'string'
            ? project.task
            : project.task.join(', '),
      } as Project
    })
  })
}

const projects: Project[] = normalizeProjects(items)

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return new Response(JSON.stringify({ message: 'Project not found.' }), {
      status: 400,
    })
  }

  return new Response(JSON.stringify(project), { status: 200 })
}
