import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/proyectos">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a proyectos
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground mb-6">{project.description}</p>
          <p className="mb-8">{project.longDescription}</p>

          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <Button asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver código
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="outline">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver demo
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          {project.screenshots &&
            project.screenshots.map((screenshot, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={screenshot || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Características principales</h2>
        <ul className="list-disc pl-5 space-y-2">
          {project.features && project.features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </div>

      {project.challenges && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Desafíos y soluciones</h2>
          <p>{project.challenges}</p>
        </div>
      )}

      {project.technologies && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Tecnologías utilizadas</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
