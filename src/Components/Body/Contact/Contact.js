import React from 'react';
import './Contact.css';
import Separator from "../../Common/Separator/Separator";
import Social_contact from "../../Common/Social_contact/Social_contact";

export default function Contact() {
    return (
        <div className='contact'>
            <Separator></Separator>
            <label className='section-title'>Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p style={{"fontSize":"24px", "fontStyle":"italic"}}>Get in Touch</p>
                    <p>Mail id : piyushgupta2601@gmail.com</p>
                    <Social_contact></Social_contact>
                </div>
                <div className="download-resume">

                     <a href='MyResume.pdf' download='MyResume.pdf'>
                            <button> <i class="fi fi-rr-download"></i> Download Resume</button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}
