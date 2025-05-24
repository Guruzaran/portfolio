"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Easy Subscriptions",
    description:
      "A MERN stack platform that allows service providers to manage subscriptions, view reports, and accept payments via Stripe.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Calendly"],
    github: "https://github.com/yourusername/easy-subscriptions",
    demo: "https://your-easy-subscriptions.live",
  },
  {
    title: "StudyMateLM (AI Study Assistant)",
    description:
      "RAG-based assistant built using LangChain, OpenAI, and FAISS. Helps students extract insights from study PDFs.",
    tech: ["LangChain", "FAISS", "Streamlit", "OpenAI", "Python"],
    github: "https://github.com/yourusername/studymatelm",
    demo: "https://your-studymatelm.live",
  },
]

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20" id="projects">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-500 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-blue-500" />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 hover:text-blue-500" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
