'use client'

import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface ProjectDetailsProps {
  slug: string
}

interface Project {
  title: string
  description: string
  url: string
  problem: string
  task: string[]
  solution: string
  icon: string
  active: boolean
  slug: string
  etc?: string
}

export default function ProjectDetails({ slug }: ProjectDetailsProps) {
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    async function fetchProject() {
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

        // Ensure tasks are arrays
        if (typeof project.task === 'string') {
          project.task = project.task
            .split(',')
            .map((task: string) => task.trim())
        }

        setProject(project)
      } catch (error) {
        console.error('Error fetching project:', error)
      }
    }

    fetchProject()
  }, [slug])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <div className="lg:ml-36 2xl:ml-0 space-y-5 max-w-[760px] mb-10">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h2 className="text-2xl text-tuna-100 font-bold hover:border-solid hover:border-b hover:text-tuna-200 w-max">
          {project.title}
        </h2>
      </a>
      <p className="text-justify">{project.description}</p>
      <h2 className="text-2xl text-tuna-100 font-bold">Problema</h2>
      <p className="text-justify">{project.problem}</p>
      <h2 className="text-2xl text-tuna-100 font-bold">Tarefas</h2>
      <ul className="list-disc list-inside">
        {project.task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <h2 className="text-2xl text-tuna-100 font-bold">Solução</h2>
      <p className="text-justify">{project.solution}</p>
      <a href="https://app.rocketseat.com.br/certificates/90902598-7567-48ee-9504-2f6118e4b74f">
        certificado
      </a>
    </div>
  )
}
