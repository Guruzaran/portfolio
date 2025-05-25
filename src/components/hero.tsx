"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex flex-col justify-center items-center text-center px-4 py-24">
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Gurusaran V R
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A software engineer passionate about building scalable systems, elegant UIs, and impactful web experiences.
      </motion.p>

      <div className="flex space-x-6">
        <a href="https://github.com/Guruzaran" target="_blank">
          <FaGithub className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank">
          <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
        <a href="mailto:guruzaran@gmail.com">
          <FaEnvelope className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
      </div>
    </section>
  )
}
