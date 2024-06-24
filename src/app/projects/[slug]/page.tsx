import React from 'react'
import ProjectDetails from './ProjectDetails'

interface ProductProps {
  params: {
    slug: string
  }
}

export default function Projects({ params }: ProductProps) {
  return <ProjectDetails slug={params.slug} />
}
