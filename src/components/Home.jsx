import React from 'react'
import ProfilePic from '../assets/img/profile.png'
import TypewriterComponent from 'typewriter-effect'
import CV from '../assets/pdf/Harshal_Resume.pdf'
const Home = () => {
  return (
<section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_data">
                    <span className="home_greeting">Hello, I'm</span>
                    <h1 className="home_name">Harshal Bhosale</h1>
                    <h3 className="home_education"> 
                    <TypewriterComponent             options={{
              strings: [
                "MERN Stack Developer.",
                "Front End.",
                "Back End.",
              ],
              autoStart: true,
              loop: true,
            }}  /></h3>
                    <div className="home_buttons">
                        <a download href={CV} className="button button-ghost">Download CV</a>
                        <a href="#about" className="button">About me</a>
                    </div>
                </div>
                <div className="home_handle">
                    <img src={ProfilePic} alt="" className="home_img" />
                </div>
                <div className="home_social">
                    <a href="https://www.linkedin.com/in/harshal-bhosale" target="_blank" className="home_social-link">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/Harshal-Bhosale/" target="_blank" className="home_social-link">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="#home" target="_blank" className="home_social-link">
                        <i className='bx bx-envelope'></i>
                    </a>
                </div>
                <a href="#about" className="home_scroll">
                    <i className='bx bx-mouse home_scroll-icon'></i>
                    <span className="home_scroll-name">Scroll Down</span>
                </a>
            </div>

        </section>
  )
}

export default Home