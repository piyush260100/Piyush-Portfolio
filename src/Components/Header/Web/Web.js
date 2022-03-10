import React from 'react';
import './Web.css';

export default function Web() {
    return (
        <div className='web'>
            <div className='web-options'>
                <a href='#project'>
                <i className="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>

            <div className='web-options'>
                <a href='#skill'>
                <i className="fi fi-rr-computer option-icon"></i>Skills 
                </a>
            </div>

            <div className='web-options'>
                <a href='#work'>
                <i className="fi fi-rr-briefcase option-icon"></i>Work
                </a>
            </div>

            <div className='web-options'>
                <a href='#contact'>
                <i className="fi fi-rr-envelope-open option-icon"></i> Contact Me
                </a>
            </div>
        </div>
    )
}
