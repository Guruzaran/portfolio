// filepath: c:\Projects\Portfolio\gurusaranvr\src\components\footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa" // Import icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-black py-8 px-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Gurusaran V R. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/Guruzaran" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a href="https://www.linkedin.com/in/gurusaran-vr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="w-5 h-5 hover:text-blue-400" />
          </a>
        </div>
      </div>
    </footer>
  )
}