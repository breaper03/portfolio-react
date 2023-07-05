import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/first_section_about/About'
import Experience from './Components/experience_section/Experience'
import Projects from './Components/projects_section/Projects'
import Skills from './Components/skills_section/Skills'
import Contact from './Components/contact_section/Contact'
function App() {

  return (
    <>
      <div className='bg-[#282c33] scroll'>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
