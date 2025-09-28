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
                Soy un desarrollador Full Stack con más de 5 años de experiencia en el desarrollo de aplicaciones web y
                móviles. Me especializo en crear experiencias de usuario intuitivas y atractivas utilizando las últimas
                tecnologías.
              </p>
              <p>
                Mi experiencia abarca desde el diseño de interfaces hasta la implementación de arquitecturas escalables
                en el backend. He trabajado en proyectos para startups y empresas establecidas, lo que me ha permitido
                desarrollar habilidades para adaptarme a diferentes entornos y metodologías de trabajo.
              </p>
              <p>
                Me apasiona aprender nuevas tecnologías y compartir conocimientos con la comunidad. Participo
                activamente en eventos y conferencias relacionadas con el desarrollo web y contribuyo a proyectos de
                código abierto.
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
