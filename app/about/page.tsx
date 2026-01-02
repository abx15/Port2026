"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that follows best practices and industry standards.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Analyzing complex challenges and delivering elegant, efficient solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Staying updated with the latest technologies and development methodologies.",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description:
      "Optimizing applications for speed, accessibility, and user experience.",
  },
];

const journey = [
  {
    year: "2024",
    title: "Foundation in Web Development",
    description:
      "Started web development with HTML5, CSS3, and JavaScript fundamentals. Built responsive static websites, practiced DOM manipulation, and created an early portfolio to showcase frontend basics.",
  },
  {
    year: "Early 2025",
    title: "Modern Frontend & React Ecosystem",
    description:
      "Transitioned to React.js with functional components, hooks, and component-driven architecture. Adopted Tailwind CSS for scalable UI, added TypeScript for type safety, and built real-world frontend projects like CivicPluse with animations and smooth UX.",
  },
  {
    year: "Mid 2025",
    title: "Full Stack & Backend Engineering",
    description:
      "Expanded into backend development using Node.js and Express. Implemented REST APIs, authentication with JWT, and database design using MongoDB and Firebase. Built full-stack platforms such as Medilink with secure data handling and role-based access.",
  },
  {
    year: "Late 2025 – Present",
    title: "Production-Ready Full Stack Developer",
    description:
      "Focused on building scalable, production-grade applications using the MERN stack. Worked with real deployments on Vercel and Render, integrated third-party services, followed Git/GitHub workflows, and continuously improved code quality and system design.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance">
                About Me
              </h1>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  I am a Full Stack Web Developer with a strong foundation in
                  both frontend and backend development. I began my backend
                  journey with PHP and MySQL, which helped me understand core
                  server-side concepts such as request handling, database
                  design, and authentication from the ground up.
                </p>

                <p className="text-pretty">
                  Over time, I transitioned to modern JavaScript-based stacks,
                  specializing in React, TypeScript, and Tailwind CSS on the
                  frontend, and Node.js, Express, and MongoDB on the backend. I
                  focus on building scalable, maintainable applications with
                  clean architecture, strong UX, and production-ready workflows.
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
                  src="/team/Arun.jpeg"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Drives Me
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Core principles that guide my work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
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
          <p className="text-xl lg:text-2xl text-muted-foreground">
            The path that shaped my skills
          </p>
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
              <div className="text-base font-bold text-primary mb-3 uppercase tracking-wide">
                {milestone.year}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {milestone.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {milestone.description}
              </p>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
              My Approach
            </h2>

            <div className="space-y-12 text-lg text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Problem-First Development
                </h3>
                <p className="text-lg">
                  I start every project by clearly understanding the problem,
                  the users, and the real-world constraints. Having worked on
                  both PHP-based systems and modern MERN applications, I focus
                  on building solutions that are practical, maintainable, and
                  aligned with actual business or user needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Clean & Scalable Architecture
                </h3>
                <p className="text-lg">
                  I design applications with scalability in mind, using modular
                  components, reusable logic, and well-structured APIs. My
                  backend experience with PHP, Node.js, and MongoDB helps me
                  write code that is easy to extend, debug, and scale as the
                  product grows.
                </p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Performance & UX Focus
                </h3>
                <p className="text-lg">
                  I pay close attention to performance and user experience. From
                  optimizing React renders and animations to efficient API calls
                  and database queries, I ensure applications feel fast, smooth,
                  and reliable on real devices and networks.
                </p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Continuous Learning & Iteration
                </h3>
                <p className="text-lg">
                  I actively improve my skills by building real projects,
                  reviewing my own code, and adapting to new tools and best
                  practices. Each project teaches me how to deliver cleaner,
                  more robust, and production-ready software.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
