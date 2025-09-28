"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Bootstrap",
  "Tailwind CSS",
  "WordPress",
  "Elementor",
  "UI/UX Design",
  "Responsive Design",
  "Figma"
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "PHP",
  "Java",
  "Python",
  "SQL",
  "MySQL",
  "SQLite",
  "RESTful APIs",
  "Autenticación y Seguridad (JWT, OAuth)"
];

const toolsSkills = [
  "Git",
  "GitHub",
  "Visual Studio Code",
  "Postman",
  "XAMPP / WAMP",
  "NPM / Yarn",
  "Docker (básico)",
  "CMS (WordPress)",
  "Meta Business Suite",
  "Microsoft 365",
  "Google Workspace"
];


export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="habilidades" className="py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Mis Habilidades</h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones digitales.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <div key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <div key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Herramientas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((skill) => (
                    <div key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
