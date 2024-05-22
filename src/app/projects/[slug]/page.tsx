'use client'

import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'

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
  etc?: string
}

interface ProductProps {
  params: {
    slug: string
  }
}

export default function Projects({ params }: ProductProps) {
  async function getProject(slug: string): Promise<Projects> {
    try {
      const response = await fetch(`/api/projects/${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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
      console.log('project=>', project.slug)
      return project
    } catch (error) {
      console.error('Error fetching projects', error)
      throw error
    }
  }

  const [project, setProject] = useState<Projects | null>(null)

  useEffect(() => {
    async function fetchProject() {
      try {
        const fetchedProject = await getProject(params.slug)
        setProject(fetchedProject)
      } catch (error) {
        console.error('Error fetching project:', error)
      }
    }

    fetchProject()
  }, [params.slug])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <div className="lg:ml-36 2xl:ml-0 space-y-5 max-w-[760px] mb-10">
      <a href={project.url} target="_blank">
        <h2 className="text-2xl text-tuna-100 font-bold hover:border-solid hover:border-b hover:text-tuna-200 w-max">
          {project.title}
        </h2>
      </a>
      <p className="text-justify">{project.description}</p>
      <h2 className="text-2xl text-tuna-100 font-bold">Problema</h2>
      <p className="text-justify">{project.problem}</p>
      <h2 className="text-2xl text-tuna-100 font-bold">Tarefa</h2>
      <ul className="list-disc list-inside">
        {Array.isArray(project.task) ? (
          project.task.map((task, index) => <li key={index}>{task}</li>)
        ) : (
          <li>{project.task}</li>
        )}
      </ul>
      <h2 className="text-2xl text-tuna-100 font-bold">Solução</h2>
      <p className="text-justify">{project.solution}</p>
      <a href="https://app.rocketseat.com.br/certificates/90902598-7567-48ee-9504-2f6118e4b74f">
        certificado
      </a>
    </div>
  )
}
