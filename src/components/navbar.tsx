"use client"

import Link from "next/link"

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur text-white shadow">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold tracking-wide text-xl">GurusaranVR</span>
        <ul className="flex gap-6 text-sm sm:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-400 transition-all">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
