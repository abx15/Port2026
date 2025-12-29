"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard. Built with modern React patterns and optimized for performance.",
    problem: "Small businesses needed an affordable, scalable online store solution",
    solution: "Created a full-stack platform with inventory tracking, payment integration, and analytics",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demo: "#",
    github: "#",
    category: "Full Stack",
    image: "/modern-ecommerce-platform-interface-dashboard.jpg",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workflows, and project tracking. Features drag-and-drop interface, notifications, and team collaboration tools.",
    problem: "Teams needed a simple yet powerful tool for project coordination",
    solution: "Built a real-time collaborative app with intuitive UI and team features",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    github: "#",
    category: "Frontend",
    image: "/project2.png",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An interactive data visualization dashboard with customizable charts, real-time metrics, and comprehensive reporting. Designed for business intelligence and data-driven decision making.",
    problem: "Companies struggled to visualize and understand their business data",
    solution: "Developed an interactive dashboard with custom charts and data exports",
    tech: ["React", "TypeScript", "D3.js", "Express", "PostgreSQL", "Redux"],
    demo: "#",
    github: "#",
    category: "Full Stack",
    image: "/analytics-dashboard.png",
  },
  {
    title: "Recipe Finder Application",
    description:
      "A recipe discovery platform with advanced search filters, meal planning features, and nutritional information. Integrates with multiple recipe APIs for diverse content.",
    problem: "Users needed an easy way to discover and organize recipes",
    solution: "Created a searchable recipe app with filters, favorites, and meal planning",
    tech: ["React", "Next.js", "API Integration", "Tailwind CSS"],
    demo: "#",
    github: "#",
    category: "Frontend",
    image: "/recipe-finder-app-interface-with-food-images.jpg",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application providing real-time forecasts, hourly predictions, and severe weather alerts. Features location-based weather and beautiful data visualizations.",
    problem: "Need for accurate, visually appealing weather information",
    solution: "Built a PWA with real-time weather data and location services",
    tech: ["React", "TypeScript", "Weather API", "PWA", "Recharts"],
    demo: "#",
    github: "#",
    category: "Frontend",
    image: "/weather-forecast-app-interface-with-temperature-an.jpg",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A unified social media management dashboard for scheduling posts, tracking analytics, and managing multiple accounts. Supports major social platforms.",
    problem: "Content creators needed to manage multiple social accounts efficiently",
    solution: "Developed a centralized dashboard with scheduling and analytics",
    tech: ["React", "Node.js", "Express", "MongoDB", "OAuth", "REST APIs"],
    demo: "#",
    github: "#",
    category: "Full Stack",
    image: "/social-media-dashboard-interface-with-analytics.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance">Projects</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              A collection of projects showcasing my expertise in frontend and full-stack development. Each project
              represents a unique challenge and demonstrates modern web development practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Enhanced cards with better hover effects */}
      <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group">
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="mb-5">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-2 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-5 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{project.description}</p>

                  <div className="space-y-5 mb-8">
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Problem</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Solution</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-muted text-sm rounded-lg font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button asChild variant="default" size="lg" className="flex-1">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="flex-1 bg-transparent">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
