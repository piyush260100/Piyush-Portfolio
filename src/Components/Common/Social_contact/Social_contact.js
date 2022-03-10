import React from 'react';
import { SocialData } from '../../data/social';
import './Social_contact.css';


export default function Social_contact() {

    const data = SocialData
    return (
        <div className='social-contact'>
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className="social-icon-div">
                            <img src={item.icon} className='social-icon' alt="icon" />
                        </div>

                    </a>
                )
            })}
            
        </div>
    )
}
