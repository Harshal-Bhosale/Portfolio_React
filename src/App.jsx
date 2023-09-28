import React from 'react'

import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'


const App = () => {
  return (
    <>
       <div id="preloader"></div>

    {setTimeout(() =>{
          (document.getElementById("preloader").style.display = "none")
        } , 4300)}

      <div className="main">
        <Home />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App