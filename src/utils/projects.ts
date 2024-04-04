import items from '@/data/projects.js'

export function getLatestSlugProject(): string | null {
  let latestSlug: string | null = null
  let latestYear = ''

  items.forEach((yearData) => {
    yearData.projects.forEach((project) => {
      if (yearData.year >= latestYear) {
        latestYear = yearData.year
        latestSlug = project.slug
      }
    })
  })

  return latestSlug
}
