import React from 'react'
import NavBar from '../components/NavBar.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import { ShopContextProvider } from '../contexts/context.jsx'
const App = () => {
  return (
    <ShopContextProvider>
      < NavBar />
      < About />
      <Skills />
      < Contact />
      <Projects />
    </ShopContextProvider >
  )
}

export default App