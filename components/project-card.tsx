"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  slug: string
}

export function ProjectCard({ title, description, tags, image, slug }: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/proyectos/${slug}`}>
        <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <div className="flex items-center text-sm text-primary font-medium">
              Ver detalles
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
