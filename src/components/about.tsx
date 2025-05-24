"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20" id="about">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 leading-8 text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm Gurusaran V R, a passionate software engineer with a strong foundation in system design,
        backend development, and cloud-native technologies. I enjoy building scalable applications and elegant user experiences.
        With a Master’s in Computer Science and hands-on experience with React, Node.js, and cloud platforms like AWS,
        I take pride in turning ideas into real-world solutions.
      </motion.p>
    </section>
  )
}
