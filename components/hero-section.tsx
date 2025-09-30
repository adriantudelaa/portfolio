"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Hola, soy <span className="text-primary">Adrián Tudela</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Desarrollador y técnico informático
            </p>
          </div>

          <p className="text-muted-foreground md:text-xl max-w-[600px]">
            Técnico Superior en Desarrollo de Aplicaciones Multiplataforma
            (DAM). Desarrollo y mantengo aplicaciones web y soluciones digitales
            combinando diseño, funcionalidad y rendimiento. Experiencia en
            WordPress, PHP y administración de sistemas, con interés en
            tecnologías modernas como React y Next.js.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#proyectos">Ver proyectos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contacto">Contactar</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/adriantudelaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/adrián-tudela-vidal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:info.atudela@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/foto0.png?height=400&width=400"
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <Button variant="ghost" size="icon" asChild className="animate-bounce">
          <Link href="#proyectos">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
