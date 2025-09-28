import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SkillsSection } from "@/components/skills-section"

export const metadata: Metadata = {
  title: "Portfolio - Desarrollador Full Stack",
  description: "Portfolio profesional mostrando proyectos y habilidades en desarrollo web y móvil",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section id="proyectos" className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-start gap-4 md:gap-8 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Mis Proyectos</h2>
            <p className="text-muted-foreground md:text-xl">
              Una selección de mis proyectos más recientes y destacados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/proyectos">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
