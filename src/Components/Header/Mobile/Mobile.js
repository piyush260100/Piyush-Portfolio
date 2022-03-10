import React from 'react';
import './Mobile.css';

export default function Mobile({isOpen , setIsOpen}) {
    return (
        <div className='mobile'> 
        <div className='close-icon' onClick={()=>{setIsOpen(!isOpen)}}>
        <i class="fi fi-rr-cross-circle"></i>
        </div>
        <div className="mobile-options">
        <div className='mobile-option'>
                <a href='#project'>
                <i className="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>

            <div className='mobile-option'>
                <a href='#skill'>
                <i className="fi fi-rr-computer option-icon"></i>Skills 
                </a>
            </div>

            <div className='mobile-option'>
                <a href='#work'>
                <i className="fi fi-rr-briefcase option-icon"></i>Work
                </a>
            </div>

            <div className='mobile-option'>
                <a href='#contact'>
                <i className="fi fi-rr-envelope-open option-icon"></i> Contact Me
                </a>
            </div>
        </div>
            
        </div>
    )
}
