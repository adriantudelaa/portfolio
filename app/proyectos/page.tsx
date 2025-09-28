import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Proyectos - Portfolio",
  description: "Explora todos mis proyectos de desarrollo",
};

export default function ProyectosPage() {
  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8">
        Todos mis proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Musemur - Gestión de Museos"
          description="Aplicación móvil desarrollada como Trabajo Fin de Grado para la gestión integral de museos, con funcionalidades de administración, visitas y reservas."
          tags={["React Native", "Node.js", "Express", "API REST", "SQL"]}
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
    </div>
  );
}
