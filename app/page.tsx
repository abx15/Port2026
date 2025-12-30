"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Code2, Palette, Smartphone, ExternalLink, Github, Briefcase, Award, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import React from "@/public/icon/react.png"

const interactiveLinks = [
  {
    id: "web-dev",
    label: "Web Development",
    icon: Code2,
    description: "Building scalable, performant web applications",
    color: "#ff4d2d",
    image: "/professional-web-developer-coding-modern-website-o.jpg",
    bgImage: "/bg-web-dev.jpg",
  },
  {
    id: "ui-ux",
    label: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user interfaces",
    color: "#e9a6b2",
    image: "/designer-working-on-ui-ux-design-with-tablet-and-s.jpg",
    bgImage: "/bg-ui-ux.jpg",
  },
  {
    id: "app-interfaces",
    label: "App Interfaces",
    icon: Smartphone,
    description: "Developing responsive mobile-first experiences",
    color: "#60a5fa",
    image: "/developer-testing-mobile-app-interface-on-smartpho.jpg",
    bgImage: "/bg-app-interfaces.jpg",
  },
]

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Technologies", value: "15+" },
]

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
    image: "/modern-ecommerce-platform-interface-dashboard.jpg",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates, drag-and-drop interface, and team workflow management.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    demo: "#",
    github: "#",
    image: "/project2.png",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with customizable charts, real-time metrics, and comprehensive reporting.",
    tech: ["React", "D3.js", "Express", "PostgreSQL"],
    demo: "#",
    github: "#",
    image: "/analytics-dashboard.png",
  },
  {
    title: "Recipe Finder App",
    description:
      "Recipe discovery platform with advanced filters, meal planning features, and nutritional information tracking.",
    tech: ["React", "Next.js", "API Integration", "Tailwind"],
    demo: "#",
    github: "#",
    image: "/recipe-finder-app-interface-with-food-images.jpg",
  },
]

const skillsData = {
  frontend: [
    { name: "React", icon: "/icon/react.png" },
    { name: "TypeScript", icon: "/icon/typescript.webp" },
    { name: "JavaScript", icon: "/icon/javascript.webp" },
    { name: "Next.js", icon: "/icon/next.png" },
    { name: "Tailwind CSS", icon: "/icon/tailwind.webp" },
    { name: "HTML5", icon: "/icon/html.png" },
    { name: "CSS3", icon: "/icon/css.png" },
    { name: "Redux", icon: "/icon/redux.webp" },
    { name: "Bootstrap", icon: "/icon/bootstrap.png" },
    { name: "GSAP", icon: "/icon/gsap.png" },

  ],
  backend: [
    { name: "Node.js", icon: "/icon/nodeJs26.png" },
    { name: "Express", icon: "/icon/express.png" },
    { name: "MongoDB", icon: "/icon/mongo.webp" },
    { name: "PostgreSQL", icon: "/icon/PostgreSQL.webp" },
    { name: "REST APIs", icon: "/icon/REST APIs.png" },
    { name: "GraphQL", icon: "/icon/GraphQL.png" },
    { name: "PHP", icon: "/icon/php.png" },
  ],
  tools: [
    { name: "Git", icon: "/icon/git.png" },
    { name: "GitHub", icon: "/icon/github.png" },
    { name: "VS Code", icon: "/icon/vscode.webp" },
    { name: "Figma", icon: "/icon/figma.webp" },
    { name: "Firebase", icon: "/icon/firebase.png" },
    { name: "Appwrite", icon: "/icon/appwrite.png" },
  ],
}

export default function HomePage() {
  const [activeLink, setActiveLink] = useState<string>("web-dev")
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  const activeItem = interactiveLinks.find((link) => link.id === activeLink)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % interactiveLinks.length)
      setActiveLink(interactiveLinks[(currentBgIndex + 1) % interactiveLinks.length].id)
    }, 4000)

    return () => clearInterval(interval)
  }, [currentBgIndex])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <p className="text-primary font-semibold text-lg tracking-wide">Hi, I'm Arun Kumar</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
                FRONTEND & FULL STACK
                <br />
                <span className="text-muted-foreground">WEB DEVELOPER</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Building modern, scalable, and user-focused web applications with clean code and intuitive design.
              </p>
            </div>

            {/* Interactive Links */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">What I Do</p>
              {interactiveLinks.map((link) => {
                const Icon = link.icon
                return (
                  <button
                    key={link.id}
                    onMouseEnter={() => setActiveLink(link.id)}
                    className={`group flex items-center gap-3 text-lg font-semibold transition-all duration-300 ${
                      activeLink === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={22} />
                    {link.label}
                    <ArrowRight
                      size={20}
                      className={`transition-transform duration-300 ${
                        activeLink === link.id ? "translate-x-2" : "group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Let's Work Together
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${activeLink}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[420px] lg:w-[320px] lg:h-[480px] rounded-3xl -z-10 -rotate-12 overflow-hidden"
              >
                <img
                  src={interactiveLinks[currentBgIndex].bgImage || "/placeholder.svg"}
                  alt="Background"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/60 mix-blend-multiply" />
              </motion.div>
            </AnimatePresence>

            {/* Image Container with AnimatePresence for smooth transitions */}
            <div className="relative w-[320px] h-[420px] lg:w-[380px] lg:h-[500px] ml-8 lg:ml-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLink}
                  initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 6 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, rotate: 8 }}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-8 border-background"
                >
                  <img
                    src={interactiveLinks[currentBgIndex].image || "/placeholder.svg"}
                    alt={`${interactiveLinks[currentBgIndex].label}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl lg:text-7xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-muted-foreground font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Recent work showcasing modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-lg">{project.description}</p>

                  {/* Tech Stack */}
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

                  {/* Links */}
                  <div className="flex gap-4">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" variant="outline" className="group bg-transparent text-lg px-8 py-6">
            <Link href="/projects">
              See All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Skills & Technologies</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </motion.div>

          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Frontend Development</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 lg:gap-8">
              {skillsData.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="group flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-border p-3 flex items-center justify-center mb-3 group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Backend Development</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {skillsData.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="group flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-border p-3 flex items-center justify-center mb-3 group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {skillsData.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="group flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-border p-3 flex items-center justify-center mb-3 group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Why Work With Me?</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I bring a unique blend of technical expertise and creative problem-solving to every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Approach</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Clean, maintainable code following industry best practices. Timely delivery with clear communication
                throughout the development process.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Focused</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Attention to detail in every pixel and line of code. Rigorous testing ensures reliable, bug-free
                applications that users love.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">User-Centric Design</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Building interfaces that users find intuitive and enjoyable. Every design decision is made with the end
                user experience in mind.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background">
        <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Talented professionals working together to deliver excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                name: "Arun Kumar",
                role: "Frontend & Full Stack Developer",
                image: "/professional-developer-portrait.png",
                description: "Specializes in building modern web applications with React, Next.js, and Node.js",
                linkedin: "https://linkedin.com/in/arunkumar",
                email: "arun.kumar@example.com",
              },
              {
                name: "Priya Sharma",
                role: "HR & Marketing Specialist",
                image: "/professional-hr-marketing-specialist-portrait.jpg",
                description: "Expert in talent acquisition, branding, and digital marketing strategies",
                linkedin: "https://linkedin.com/in/priyasharma",
                email: "priya.sharma@example.com",
              },
              {
                name: "Raj Patel",
                role: "Graphic Designer & Video Editor",
                image: "/graphic-designer-portrait.png",
                description: "Creates stunning visuals and engaging video content for digital platforms",
                linkedin: "https://linkedin.com/in/rajpatel",
                email: "raj.patel@example.com",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <Card className="relative overflow-hidden h-full border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl bg-card">
                  <div className="p-8 text-center">
                    {/* Circular Image */}
                    <div className="relative inline-block mb-6">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative ring on hover */}
                      <div className="absolute inset-0 rounded-full border-4 border-primary/0 group-hover:border-primary/30 transition-all duration-300 scale-110 group-hover:scale-125" />
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4 text-base">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6 min-h-[4rem]">{member.description}</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-11 h-11 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="bg-muted border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">My Development Process</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "Understanding your requirements, goals, and target audience. Creating detailed project specifications and timelines.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Crafting intuitive user interfaces and interactive prototypes. Ensuring design aligns with your brand and user expectations.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Building robust, scalable applications with clean code. Comprehensive testing across devices and browsers.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Smooth deployment to production with monitoring. Ongoing maintenance and support to ensure long-term success.",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {process.step}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {[
            {
              name: "Sarah Johnson",
              role: "Product Manager at TechCorp",
              testimonial:
                "Arun delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth.",
            },
            {
              name: "Michael Chen",
              role: "Founder of StartupHub",
              testimonial:
                "Working with Arun was a game-changer for our business. He transformed our ideas into a beautiful, functional web application that our users love.",
            },
            {
              name: "Emily Rodriguez",
              role: "Marketing Director",
              testimonial:
                "Professional, responsive, and incredibly skilled. Arun built our analytics dashboard on time and on budget. Highly recommend!",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-primary"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                    "{testimonial.testimonial}"
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-balance">Let's Build Something Amazing Together</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 text-pretty leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you need a new website, want
            to improve an existing one, or have an innovative idea to bring to life.
          </p>
          <Button asChild size="lg" className="text-lg px-10 py-7">
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
