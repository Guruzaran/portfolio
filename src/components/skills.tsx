"use client"

import { motion } from "framer-motion"

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Node.js", "Express", "MongoDB",
  "SQL", "AWS", "Git", "Docker"
]

export default function Skills() {
  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-24" id="skills">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 text-sm font-medium px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out text-center"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
