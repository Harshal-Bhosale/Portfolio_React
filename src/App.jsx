import React from 'react'

// import GIF from './assets/img/HB.gif'

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
       
    {setTimeout(() =>{
      (document.getElementById("preloader").style.display = "none");
        } , 4300)}

      {/* <div className='preloader_div' >
        <img  className='preloader_img' src={GIF} alt=''></img>
        </div>         */}
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