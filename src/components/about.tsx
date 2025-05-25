"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-24" id="about">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm Gurusaran V R, a passionate software engineer with a strong foundation in system design,
        backend development, and cloud-native technologies. I enjoy building scalable applications and elegant user experiences.
        With a Master’s in Computer Science and hands-on experience with React, Node.js, and AWS, I take pride in turning ideas into real-world solutions.
      </motion.p>
    </section>
  )
}
