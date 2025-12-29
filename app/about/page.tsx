"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, Rocket, Target } from "lucide-react"
import { Card } from "@/components/ui/card"

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that follows best practices and industry standards.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Analyzing complex challenges and delivering elegant, efficient solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Staying updated with the latest technologies and development methodologies.",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description: "Optimizing applications for speed, accessibility, and user experience.",
  },
]

const journey = [
  {
    year: "2021",
    title: "Started Web Development Journey",
    description: "Began learning HTML, CSS, and JavaScript. Built first portfolio website and basic web projects.",
  },
  {
    year: "2022",
    title: "Mastered React & Modern Frontend",
    description:
      "Deep dive into React ecosystem, TypeScript, and modern frontend tooling. Started building complex applications.",
  },
  {
    year: "2023",
    title: "Full Stack Development",
    description:
      "Expanded to backend technologies including Node.js, Express, and databases. Delivered complete full-stack solutions.",
  },
  {
    year: "2024-Present",
    title: "Professional Developer",
    description: "Working on production applications, contributing to open source, and mentoring junior developers.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance">About Me</h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  I'm a passionate Frontend and Full Stack Developer with over 4 years of experience creating
                  exceptional web experiences. My journey in web development is driven by curiosity, creativity, and a
                  commitment to continuous improvement.
                </p>
                <p className="text-pretty">
                  I specialize in building modern, responsive web applications using React, TypeScript, and the latest
                  web technologies. My approach combines technical expertise with a deep understanding of user needs,
                  resulting in products that are both powerful and intuitive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <img
                  src="/professional-developer-portrait.png"
                  alt="About Me"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Drives Me</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">Core principles that guide my work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-background border-2 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Journey</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground">The path that shaped my skills</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {journey.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 border-l-4 border-primary/40"
            >
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg" />
              <div className="text-base font-bold text-primary mb-3 uppercase tracking-wide">{milestone.year}</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{milestone.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-muted border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">My Approach</h2>
            <div className="space-y-12 text-lg text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">User-Centered Design</h3>
                <p className="text-lg">
                  Every project starts with understanding the end user. I prioritize creating interfaces that are
                  intuitive, accessible, and delightful to use, ensuring that technology serves people, not the other
                  way around.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Scalable Architecture</h3>
                <p className="text-lg">
                  I build with the future in mind. My code is structured to grow with your needs, using modular
                  patterns, clear documentation, and best practices that make maintenance and expansion straightforward.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Performance Optimization</h3>
                <p className="text-lg">
                  Speed matters. I optimize every aspect of the applications I build—from code splitting and lazy
                  loading to efficient state management and database queries—to deliver fast, responsive experiences.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Continuous Improvement</h3>
                <p className="text-lg">
                  The web evolves rapidly, and so do I. I stay current with emerging technologies, refine my skills
                  through regular learning, and apply new knowledge to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
