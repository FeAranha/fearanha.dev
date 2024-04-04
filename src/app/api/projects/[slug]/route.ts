import { z } from 'zod'

import items from '@/data/projects.js'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)

  const project = items
    .flatMap((yearData) => yearData.projects)
    .find((project) => project.slug === slug)

  if (!project) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(project)
}
