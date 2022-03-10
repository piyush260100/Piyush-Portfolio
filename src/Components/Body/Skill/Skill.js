import React from 'react';
import './Skill.css';
import Separator from '../../Common/Separator/Separator';
import { skillsData } from '../../data/skills';
import SkillCard from './SkillCard';


export default function Skill() {

    const data=skillsData;
    return (
        <div className='skill'>
            <Separator></Separator>
            <label className='section-title'>Skills</label>
            <div className='skills-container'>
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label className='skills-section-title'>{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return( 
                                    <SkillCard skill={skill}/>)

                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
