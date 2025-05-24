"use client"

import { motion } from "framer-motion"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "AWS",
  "Git",
  "Docker",
]

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20" id="skills">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 py-4 px-2 rounded-xl shadow hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
