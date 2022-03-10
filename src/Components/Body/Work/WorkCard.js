import React from 'react';
import  "./WorkCard.css";

export default function WorkCard({work}) {
    return (
        <div className='work-card'>
            <img src={work.companylogo} className='work-logo' alt='companylogo'></img>

            <div className="work-info">
                <label className='work-company'>{work.company}</label>
                <label className='work-designation'>{work.designation}</label>
                <div className="work-date">
                    <label>{work.dateofjoining}</label> to <label>{work.dateofend}</label>
                </div>
                <div className="work-description">
                    <p style={{"textAlign":"justify"}}>{work.description}</p>
                </div>
            </div>

            
        </div>
    )
}
