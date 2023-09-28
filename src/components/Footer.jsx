import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title"><img src="assets/img/hb.png" alt=''/>Harshal</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#work" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer_link">Testimonials</a>
                    </li>
                    <li>
                        <a href="" className="footer_link"></a>
                    </li>
                </ul>

                <ul className="footer_social">
                    <a href="" target="blank" className="footer_social-link">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="" target="blank" className="footer_social-link">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="" target="blank" className="footer_social-link">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </ul>
             <span className="footer_copy">
                &#169; Harshal Bhosale.All rights reserved
             </span>
        </div>
    </footer>
  )
}

export default Footer