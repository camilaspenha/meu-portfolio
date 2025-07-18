import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio"
import Resume from "../components/Resume/Resume"
import Skills from "../components/Skills/Skills"


export default function Home() {

  return (
    <>
    <Header />

    <main>
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </main>

    <Footer />
    </>
  )
}
