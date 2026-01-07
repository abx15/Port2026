"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Trophy, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    category: "Hackathons",
    icon: Trophy,
    items: [
      {
        title: "Smart India Hackathon 2023",
        description:
          "Developed an AI-powered healthcare solution for rural areas",
        date: "August 2023",
        result: "Regional Finalist",
      },
      {
        title: "HackTheWeb 2023",
        description:
          "Built a real-time collaboration platform for remote teams",
        date: "June 2023",
        result: "2nd Place",
      },
      {
        title: "DevHacks 2022",
        description:
          "Created an innovative e-learning platform with gamification",
        date: "November 2022",
        result: "Winner - Best UI/UX",
      },
    ],
  },
  {
    category: "Certifications",
    icon: Award,
    items: [
      {
        title: "Advanced React Patterns",
        description:
          "Frontend Masters certification for advanced React development",
        date: "January 2024",
        issuer: "Frontend Masters",
      },
      {
        title: "Full Stack Web Development",
        description: "Comprehensive certification covering MERN stack",
        date: "September 2023",
        issuer: "Udemy",
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        description: "In-depth algorithms and problem-solving certification",
        date: "May 2023",
        issuer: "freeCodeCamp",
      },
    ],
  },
  {
    category: "Milestones",
    icon: Users,
    items: [
      {
        title: "50+ Projects Delivered",
        description: "Successfully completed and deployed over 50 web projects",
        date: "2021-2024",
      },
      {
        title: "Open Source Contributions",
        description:
          "Active contributor to popular React and TypeScript libraries",
        date: "Ongoing",
      },
      {
        title: "Technical Mentorship",
        description:
          "Mentored 10+ junior developers in web development fundamentals",
        date: "2023-Present",
      },
    ],
  },
];

export default function AchievementsPage() {
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
              Achievements
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Highlights of my journey in web development—from hackathons and
              certifications to meaningful milestones and contributions to the
              developer community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Sections */}
      <section className="w-full px-6 lg:px-12 py-24 lg:py-40">
        <div className="space-y-20">
          {achievements.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    {section.category}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <Card className="p-6 h-full border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start gap-2 mb-3">
                          <Calendar
                            size={16}
                            className="text-primary mt-1 flex-shrink-0"
                          />
                          <span className="text-sm font-medium text-primary">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        {"result" in item && (
                          <div className="pt-3 border-t border-border">
                            <span className="text-xs font-semibold text-foreground bg-primary/10 px-3 py-1 rounded-full">
                              {item.result}
                            </span>
                          </div>
                        )}
                        {"issuer" in item && (
                          <div className="pt-3 border-t border-border">
                            <span className="text-xs font-medium text-muted-foreground">
                              Issued by: {item.issuer}
                            </span>
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-muted border-y border-border">
        <div className="w-full px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3", label: "Hackathons" },
                { value: "3", label: "Certifications" },
                { value: "50+", label: "Projects" },
                { value: "10+", label: "Mentees" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
