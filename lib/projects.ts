interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  screenshots?: string[]
  tags: string[]
  technologies?: string[]
  features?: string[]
  challenges?: string
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    slug: "ecommerce-app",
    title: "E-commerce App",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos y gestión de usuarios.",
    longDescription:
      "Una plataforma de comercio electrónico completa con funcionalidades avanzadas como carrito de compras, procesamiento de pagos, gestión de usuarios y panel de administración. La aplicación está construida con Next.js y utiliza Stripe para procesar pagos de manera segura.",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe", "NextAuth.js"],
    features: [
      "Catálogo de productos con filtros y búsqueda",
      "Carrito de compras con persistencia",
      "Procesamiento de pagos con Stripe",
      "Autenticación de usuarios",
      "Panel de administración para gestionar productos",
      "Historial de pedidos",
      "Reseñas de productos",
    ],
    challenges:
      "Uno de los principales desafíos fue implementar un sistema de carrito de compras que persistiera entre sesiones y se sincronizara con la base de datos cuando el usuario iniciara sesión. Utilicé una combinación de localStorage y cookies para resolver este problema.",
    githubUrl: "https://github.com/username/ecommerce-app",
    liveUrl: "https://ecommerce-app.example.com",
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Panel de control para visualización de datos con gráficos interactivos y reportes en tiempo real.",
    longDescription:
      "Un panel de control analítico que permite a los usuarios visualizar y analizar datos en tiempo real. La aplicación incluye gráficos interactivos, filtros avanzados y la capacidad de generar informes personalizados.",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    tags: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    technologies: ["React", "D3.js", "Firebase", "Tailwind CSS", "React Query", "Redux"],
    features: [
      "Gráficos interactivos con D3.js",
      "Filtros avanzados para análisis de datos",
      "Actualización de datos en tiempo real",
      "Exportación de informes en PDF y CSV",
      "Panel de administración para configurar fuentes de datos",
      "Alertas y notificaciones personalizables",
    ],
    challenges:
      "El mayor desafío fue optimizar el rendimiento al manejar grandes conjuntos de datos y actualizaciones en tiempo real. Implementé técnicas de virtualización y memoización para mejorar la experiencia del usuario.",
    githubUrl: "https://github.com/username/dashboard-analytics",
    liveUrl: "https://dashboard-analytics.example.com",
  },
  {
    slug: "task-management-app",
    title: "App de Gestión de Tareas",
    description: "Aplicación para gestionar tareas con funcionalidades de colaboración en tiempo real.",
    longDescription:
      "Una aplicación de gestión de tareas que permite a los equipos colaborar en proyectos en tiempo real. Los usuarios pueden crear, asignar y seguir tareas, establecer plazos y comunicarse a través de comentarios.",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    tags: ["React Native", "Redux", "Node.js", "MongoDB"],
    technologies: ["React Native", "Redux", "Node.js", "Express", "MongoDB", "Socket.io", "Jest"],
    features: [
      "Creación y asignación de tareas",
      "Tableros Kanban personalizables",
      "Colaboración en tiempo real",
      "Notificaciones push",
      "Modo offline con sincronización",
      "Integración con calendario",
      "Estadísticas y reportes de productividad",
    ],
    challenges:
      "Implementar la funcionalidad offline fue un desafío significativo. Desarrollé un sistema de sincronización que almacena los cambios localmente y los sincroniza con el servidor cuando el dispositivo vuelve a estar en línea.",
    githubUrl: "https://github.com/username/task-management-app",
    liveUrl: "https://task-app.example.com",
  },
  {
    slug: "portfolio-personal",
    title: "Portfolio Personal",
    description: "Portfolio profesional desarrollado con Next.js, TypeScript y Tailwind CSS.",
    longDescription:
      "Un portfolio personal moderno y responsivo para mostrar proyectos y habilidades. Incluye animaciones fluidas, diseño adaptable a diferentes dispositivos y optimización para SEO.",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    features: [
      "Diseño responsivo para todos los dispositivos",
      "Animaciones fluidas con Framer Motion",
      "Modo oscuro/claro",
      "Páginas detalladas para cada proyecto",
      "Formulario de contacto funcional",
      "Optimización para SEO",
    ],
    challenges:
      "El principal desafío fue crear animaciones fluidas que funcionaran bien en todos los dispositivos sin afectar el rendimiento. Utilicé Framer Motion con técnicas de lazy loading para optimizar la experiencia.",
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com",
  },
  {
    slug: "blog-tecnico",
    title: "Blog Técnico",
    description: "Plataforma de blog con sistema de gestión de contenidos y comentarios.",
    longDescription:
      "Una plataforma de blog técnico con sistema de gestión de contenidos que permite publicar artículos con formato Markdown, categorizar contenido y permitir comentarios de los lectores.",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    tags: ["Next.js", "MDX", "Contentlayer", "Tailwind CSS"],
    technologies: ["Next.js", "MDX", "Contentlayer", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Editor de Markdown con vista previa",
      "Categorización y etiquetado de artículos",
      "Sistema de comentarios",
      "Búsqueda de contenido",
      "Suscripción a newsletter",
      "Estadísticas de lectura",
      "SEO optimizado",
    ],
    challenges:
      "Implementar un sistema de comentarios que fuera rápido y seguro fue un desafío. Opté por una solución personalizada utilizando Prisma y PostgreSQL para almacenar los comentarios y un sistema de moderación para prevenir spam.",
    githubUrl: "https://github.com/username/blog-tecnico",
    liveUrl: "https://blog.example.com",
  },
  {
    slug: "api-restful",
    title: "API RESTful",
    description: "API RESTful para gestión de recursos con autenticación y autorización.",
    longDescription:
      "Una API RESTful completa para gestión de recursos con autenticación JWT, autorización basada en roles, documentación automática y pruebas automatizadas.",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest", "Docker"],
    features: [
      "Autenticación con JWT",
      "Autorización basada en roles",
      "Documentación con Swagger",
      "Validación de datos con Joi",
      "Pruebas unitarias y de integración",
      "Caché con Redis",
      "Despliegue con Docker",
    ],
    challenges:
      "Diseñar un sistema de autorización flexible que permitiera definir permisos granulares fue un desafío. Implementé un sistema basado en roles y capacidades que permite un control preciso sobre qué acciones puede realizar cada usuario.",
    githubUrl: "https://github.com/username/api-restful",
    liveUrl: "https://api.example.com/docs",
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
