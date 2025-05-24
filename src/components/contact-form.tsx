"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export default function ContactForm() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 text-center" id="contact">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Have a question or want to work together? Drop me a line!
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="mailto:guruzaran@gmail.com"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}
