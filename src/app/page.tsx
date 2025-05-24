import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import ContactForm from '@/components/contact-form'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><ContactForm /></section>
      </main>
    </>
  )
}
