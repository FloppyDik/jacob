import React from 'react'
import style from '../styles/Contact.module.scss'
import emailjs from 'emailjs-com'

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mjbcbdo', 'template_wklwsbi', e.target, 'MdqB8dgp5hWR2t15-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

  return (
    <div className={style.sectionInner}>
        <div className={style.sectionNav}>
            <h1>CONTACT</h1>
            <p>poggers</p>    
        </div>

        <div className={style.contact}>
            <form onSubmit={sendEmail}>
                <input type="text" className={style.contactInput} name="name" placeholder="Your name"/>
                
                <input type="email" className={style.contactInput} name="email" placeholder="Your email"/>

                <textarea className={style.contactTextArea} name="message" placeholder="Message"></textarea>
                
                <button type="submit" value="Submit" className={style.contactSubmit}>Send Message</button>       
            </form>
        </div>
  </div>
  )
}

export default Contact