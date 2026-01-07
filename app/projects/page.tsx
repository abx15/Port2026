"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";

const projects = [
  {
    title: "Medilink Health Tracker",
    description:
      "A comprehensive digital health management platform that allows users to securely store, track, and manage their medical records in one place. Features include user authentication, health card generation, notifications, and role-based access for doctors and admins. Built with modern full-stack technologies and optimized for scalability and security.",

    problem:
      "Patients and healthcare providers faced difficulties managing medical records securely and accessing them efficiently across different platforms.",

    solution:
      "Developed a centralized full-stack health tracking system with secure authentication, structured medical records, and real-time access for authorized users.",

    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
    ],

    demo: "https://medilink-sooty.vercel.app/",
    github: "https://github.com/abx15/medilink",
    category: "Full Stack MERN",
    image: "/projects/medilink.png",
  },
  {
    title: "CivicPluse – City Issue Reporting Platform",
    description:
      "A civic engagement web platform that enables citizens to report local issues such as road damage, water supply problems, sanitation, and public safety concerns. The platform provides real-time status updates, issue tracking, and an intuitive user interface to improve communication between citizens and authorities.",

    problem:
      "Citizens lacked a centralized and transparent system to report civic issues and track their resolution status efficiently.",

    solution:
      "Developed a user-friendly platform where users can report issues, view updates in real time, and monitor progress, improving accountability and civic participation.",

    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],

    demo: "https://civic-pluse.vercel.app/",
    github: "https://github.com/abx15/civic-pluse",
    category: "Frontend",
    image: "/projects/civicpluse.png",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An interactive data visualization dashboard with customizable charts, real-time metrics, and comprehensive reporting. Designed for business intelligence and data-driven decision making.",
    problem:
      "Companies struggled to visualize and understand their business data",
    solution:
      "Developed an interactive dashboard with custom charts and data exports",
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
    solution:
      "Created a searchable recipe app with filters, favorites, and meal planning",
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
    problem:
      "Content creators needed to manage multiple social accounts efficiently",
    solution: "Developed a centralized dashboard with scheduling and analytics",
    tech: ["React", "Node.js", "Express", "MongoDB", "OAuth", "REST APIs"],
    demo: "#",
    github: "#",
    category: "Full Stack",
    image: "/social-media-dashboard-interface-with-analytics.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-border">
        <div className="w-full px-6 lg:px-12 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              A collection of projects showcasing my expertise in frontend and
              full-stack development. Each project represents a unique challenge
              and demonstrates modern web development practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Enhanced cards with better hover effects */}
      <section className="w-full px-6 lg:px-12 py-24 lg:py-40">
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

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="space-y-5 mb-8">
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                        Problem
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                        Solution
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
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
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="flex-1"
                    >
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
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-transparent"
                    >
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

      {/* Contact Section - Full Width */}
      <section className="w-full border-t border-border bg-muted/30">
        <div className="w-full px-6 lg:px-12 py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or want to collaborate? Fill out the form
                below and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
