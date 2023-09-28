import React from 'react'
import AboutImg from "../assets/img/about.jpg"

const About = () => {
  return (
    <section className="about section" id="about">
    <span className="section_subtitle">My Intro</span>
    <h2 className="section_title">About Me</h2>
    <div className="about_container container grid">
        <img src={AboutImg} alt="About " className="about_img"/>
        <div className="about_data">
            <div className="about_info">

                <div className="about_box">
                    <i className='bx bx-award about_icon'></i>
                    <h3 className="about_title">Experience</h3>
                    <span className="about_subtitle">Fresher(Student)</span>
                </div>
                <div className="about_box">
                    <i className='bx bx-briefcase-alt about_icon'></i>
                    <h3 className="about_title">Completed</h3>
                    <span className="about_subtitle">50+ Projects</span>
                </div>
                <div className="about_box">
                    <i className='bx bx-support about_icon'></i>
                    <h3 className="about_title">Support</h3>
                    <span className="about_subtitle">Online Support 24/7</span>
                </div>
            </div>
            <p className="about_description">
                A Third Year Computer Engineering student with great
                technical and communication skills seeking a dynamic
                role with a growing company .Past experience on various
                projects and various industry works, Capable of hard
                work and open to learn on the go.
            </p>
            <a href="#contact" className="button">Contact Me</a>

        </div>
    </div>

</section>
  )
}

export default About