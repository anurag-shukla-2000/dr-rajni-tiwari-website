import Navbar from '../components/Navbar'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Services from '../components/Sections/Services'
import Expertise from '../components/Sections/Expertise'
import Contact from '../components/Sections/Contact'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Contact />
    </main>
  )
}
