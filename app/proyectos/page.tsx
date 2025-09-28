import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Proyectos - Portfolio",
  description: "Explora todos mis proyectos de desarrollo",
}

export default function ProyectosPage() {
  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8">Todos mis proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="E-commerce App"
          description="Plataforma de comercio electrónico con carrito de compras, pagos y gestión de usuarios."
          tags={["Next.js", "TypeScript", "Stripe", "Prisma"]}
          image="/placeholder.svg?height=400&width=600"
          slug="ecommerce-app"
        />
        <ProjectCard
          title="Dashboard Analytics"
          description="Panel de control para visualización de datos con gráficos interactivos y reportes en tiempo real."
          tags={["React", "D3.js", "Firebase", "Tailwind CSS"]}
          image="/placeholder.svg?height=400&width=600"
          slug="dashboard-analytics"
        />
        <ProjectCard
          title="App de Gestión de Tareas"
          description="Aplicación para gestionar tareas con funcionalidades de colaboración en tiempo real."
          tags={["React Native", "Redux", "Node.js", "MongoDB"]}
          image="/placeholder.svg?height=400&width=600"
          slug="task-management-app"
        />
        <ProjectCard
          title="Portfolio Personal"
          description="Portfolio profesional desarrollado con Next.js, TypeScript y Tailwind CSS."
          tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
          image="/placeholder.svg?height=400&width=600"
          slug="portfolio-personal"
        />
        <ProjectCard
          title="Blog Técnico"
          description="Plataforma de blog con sistema de gestión de contenidos y comentarios."
          tags={["Next.js", "MDX", "Contentlayer", "Tailwind CSS"]}
          image="/placeholder.svg?height=400&width=600"
          slug="blog-tecnico"
        />
        <ProjectCard
          title="API RESTful"
          description="API RESTful para gestión de recursos con autenticación y autorización."
          tags={["Node.js", "Express", "MongoDB", "JWT"]}
          image="/placeholder.svg?height=400&width=600"
          slug="api-restful"
        />
      </div>
    </div>
  )
}
