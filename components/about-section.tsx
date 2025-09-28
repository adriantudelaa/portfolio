"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre-mi" className="py-12 md:py-24 bg-muted/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=600" alt="Foto de perfil" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Sobre mí</h2>
              <p className="text-muted-foreground md:text-xl">
                Conozca más sobre mi experiencia y trayectoria profesional.
              </p>
            </div>

            <div className="space-y-4">
  <p>
    Soy un desarrollador y técnico informático con formación en Desarrollo de Aplicaciones Multiplataforma (DAM) y experiencia en el desarrollo web, la administración de sistemas y el soporte tecnológico. Disfruto creando soluciones digitales funcionales y eficientes que combinan buen diseño, rendimiento y facilidad de uso.
  </p>
  <p>
    He participado en proyectos de mejora y mantenimiento de plataformas online, desarrollo de plugins personalizados en PHP, gestión de contenidos con WordPress y administración de redes y equipos informáticos. Esta experiencia me ha permitido adquirir una visión completa del entorno tecnológico y adaptarme con rapidez a diferentes necesidades y entornos de trabajo.
  </p>
  <p>
    Soy una persona responsable, proactiva y con gran capacidad de aprendizaje. Me motiva seguir formándome en nuevas tecnologías y metodologías de desarrollo para seguir creciendo como profesional y aportar soluciones innovadoras en cada proyecto.
  </p>
</div>


            <Button asChild>
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
