
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
