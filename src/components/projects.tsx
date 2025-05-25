"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Easy Subscriptions",
    description: "A MERN stack platform that allows service providers to manage subscriptions, view reports, and accept payments via Stripe.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Calendly"],
    github: "https://github.com/yourusername/easy-subscriptions",
    demo: "https://your-easy-subscriptions.live",
    featured: true,
  },
  {
    title: "StudyMateLM (AI Study Assistant)",
    description: "RAG-based assistant built using LangChain, OpenAI, and FAISS. Helps students extract insights from study PDFs.",
    tech: ["LangChain", "FAISS", "Streamlit", "OpenAI", "Python"],
    github: "https://github.com/yourusername/studymatelm",
    demo: "https://your-studymatelm.live",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-24" id="projects">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl bg-white dark:bg-[#1c1c1c] shadow-md dark:shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {project.featured && (
              <span className="absolute top-4 right-4 bg-yellow-300 dark:bg-yellow-500 text-black dark:text-black text-[11px] font-bold px-2 py-1 rounded-full shadow">
                Featured
              </span>
            )}

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href={project.github}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
