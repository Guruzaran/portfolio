// filepath: c:\Projects\Portfolio\gurusaranvr\src\components\hero.tsx
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Gurusaran V R
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A software engineer passionate about building scalable systems, elegant UIs, and impactful web experiences.
      </motion.p>

      <div className="mt-6 flex space-x-6">
        <a href="https://github.com/Guruzaran" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
        <a href="mailto:guruzaran@gmail.com">
          <FaEnvelope className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
      </div>
    </section>
  );
}