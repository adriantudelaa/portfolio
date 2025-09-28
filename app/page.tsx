import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = {
  title: "Adrian Tudela - Portafolio",
  description: "Portafolio de Adrian Tudela, desarrollador web y móvil",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section id="proyectos" className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-start gap-4 md:gap-8 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Mis Proyectos
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Una selección de mis proyectos más recientes y destacados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Musemur - Gestión de Museos"
              description="Aplicación móvil desarrollada como Trabajo Fin de Grado para la gestión integral de museos, con funcionalidades de administración, visitas y reservas."
              tags={[
                "React Native",
                "Node.js",
                "Express",
                "API REST",
                "SQL",
              ]}
              image="/musemur.png?height=400&width=600"
              link="https://github.com/adriantudelaa/musemur"
            />

            <ProjectCard
              title="Recetas de Mamá"
              description="App móvil para la gestión de recetas y planificación de menús semanales, con autenticación y sincronización en la nube."
              tags={["React Native", "Firebase", "Firestore", "Auth"]}
              image="/recetasmama.png?height=400&width=600"
              link="https://github.com/adriantudelaa/Recetas-Mama"
            />

            <ProjectCard
              title="Portfolio Personal"
              description="Portfolio profesional desarrollado para mostrar proyectos y experiencia, con diseño moderno y responsive."
              tags={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
              image="/portfolio.png?height=400&width=600"
              link="https://github.com/adriantudelaa/portfolio"
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
  );
}
