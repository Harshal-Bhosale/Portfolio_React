import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
 const form = useRef();
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fung8pq', 'template_3zr3bze', form.current, '73Z6vw_Mr8b0jeQKQ')
      .then((result) => {
        document.getElementById("checkres").style.display = "inline";
        setTimeout(() =>{
            (document.getElementById("checkres").style.display = "none")
          } , 2000)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
  <section className="contact section" id="contact">
        <span className="section_subtitle">Get in touch</span>
        <h2 className="section_title">Contact Me</h2>

    <div className="contact_container container grid">
        <div className="contact_content">
           <h3 className="contact_title">Talk to Me</h3>

           <div className="contact_info">
            <div className="contact_card">
            <i className="bx bx-mail-send contact_card-icon"></i>
             <h3 className="contact_card-title">Email</h3>   
             <span className="contact_card-data">harshal_bhosale</span>

             <a href="mailto:harshalbhosale.sae.comp@gmail.com" target="blank" className="contact_button">
                Write me<i className="bx bx-right-arrow-alt contact_button-icon"></i>
             </a>
            </div>
            <div className="contact_card">
            <i className="bx bxl-whatsapp contact_card-icon"></i>
             <h3 className="contact_card-title">Whatsapp</h3>   
             <span className="contact_card-data">+91-99999999</span>

             <a href="https://api.whatsapp.com/send?phone=+917020866116&text=⚜Hello Harshal,I was redirected from your site as I wanted to contact you!" target="blank" className="contact_button">
                Write me<i className="bx bx-right-arrow-alt contact_button-icon"></i>
             </a>
            </div>
            <div className="contact_card">
            <i className="bx bx-conversation contact_card-icon"></i>
             <h3 className="contact_card-title">Teligram</h3>   
             <span className="contact_card-data">Tripyrate</span>

             <a href="" target="blank" className="contact_button">
                Write me<i className="bx bx-right-arrow-alt contact_button-icon"></i>
             </a>
            </div>
           </div>       
        </div>

        <div className="contact_container">
            <h3 className="contact_title">Share me your thoughts</h3>
            <form ref={form} className="contact_form" onSubmit= {sendEmail}>
                <div className="contact_form-div">
                    <label htmlFor="" className="contact_form-tag">Name</label>
                    <input type="text" id="name" name='name' className="contact_form-input" placeholder="Insert your name" required />
                </div>

                <div className="contact_form-div">
                    <label htmlFor=""  className="contact_form-tag">Mail</label>
                    <input type="email" id="mail" name='email' className="contact_form-input" placeholder="Insert Your email" required />
                </div>

                <div className="contact_form-div contact_form-area" >
                    <label htmlFor="" className="contact_form-tag" >Message</label>

                    <textarea name="message" id="msg" cols="30" rows="10" className="contact_form-input" placeholder="Write me here about message, feedback or to contact project details." required></textarea>
                </div>   
                <button className="button" type="submit">Send Message </button> 
                <span id='checkres'style={{color:"#52ec51",marginLeft:"10px",display:"none"}}>Sent <i className='bx bxs-message-check bx-tada bx-sm'  ></i></span>
                
            </form>
        </div>
    </div>
</section>

  )
}

export default Contact