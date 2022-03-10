import React from 'react';
import './Intro.css';
import profilephoto from '../../../assests/profilephoto.jpg'
import Social_contact from '../../Common/Social_contact/Social_contact';

export default function Intro() {
    return (
        <div className='intro'>
            <div className="intro-top">
                <div className="intro-info">
                    Hi there! my name is <span className='intro-info-name'>  Piyush ✋</span>
                    <br />
                    I am a <span className='intro-info-role'>MERN Stack 🌐 & Android App developer 🍫</span>
                    

                </div>

                <div className="intro-photo">
                    <img src={profilephoto} className='profilephoto' alt='profilephoto'></img>

                </div>
            </div>

            <div className="intro-bottom">
                <Social_contact></Social_contact>
                

              

            </div>

        </div>
    )
}
