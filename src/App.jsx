import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/first_section_about/about'
import Experience from './Components/experience_section/Experience'
import Projects from './Components/projects_section/Projects'
import Skills from './Components/skills_section/Skills'
function App() {

  return (
    <>
      <div className='bg-[#282c33]'>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </div>
    </>
  )
}

export default App
