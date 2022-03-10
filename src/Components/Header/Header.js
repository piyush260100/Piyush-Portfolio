import React, {useState} from 'react';
import './Header.css';
import Mobile from './Mobile/Mobile';
import Web from './Web/Web';


export default function Header() {

    const [isOpen, setIsOpen]=useState(false);
    return (
        <div className='header'>
            <div className="logo">PORTFOLIO</div>
            <div className="menu">
                <div className="webMenu">
                    <Web></Web>
                </div>
                <div className="mobileMenu">
                    <div onClick={()=>{setIsOpen(!isOpen)}}>
                    <i className="fi fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
            
        </div>
    )
}
