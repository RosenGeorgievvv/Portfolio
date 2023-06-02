import React, { useRef, useState } from 'react'
import '../styles/contact.css'
import MailIcon from '../assets/mailIcon.png'
import Map from './Map'
import emailjs from '@emailjs/browser'

function Contact() {

    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm("service_05uatyr", form.current, "K3LKm0O1UE0ej5gmF")
          .then((result) => {
              console.log(result.text);
              setSuccess(true);
            },
            (error) => {
              console.log(error.text);
              setError(true);
            }
          );
      };

return (
    <div className='section-contact' id='contact'>
        <div className='contact-container'>
            <div className='contact-leftSide'>
                <form onSubmit={handleSubmit} ref={form}>
                    <h1>Contact me:</h1>
                    <input type='text' placeholder='Your name' name='name' required />
                    <input type='email' placeholder='Your email' name='email' required />
                    <textarea placeholder='Type your message' rows={10} name='message' />
                    <button type='submit' value="Send">Send</button>
                    <span>{success ? "Your message has been sent!" : " "}</span>
                    <span>{error ? "Something went wrong. :(" : ""}</span>
                </form>
                <div className='contact'>
                    <span>
                        <img src={MailIcon} /> Or text me at:
                    </span>
                    <a href='mailto:rosengeorgiew1@gmail.com' target='blank'>rosengeorgiew1@gmail.com</a>
                </div>
            </div>
            <div className='contact-rightSide'>
                <Map />
            </div>
        </div>
    </div>
)
}

export default Contact