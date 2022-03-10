import React from 'react';
import './Body.css';
import Intro from './Intro/Intro';
import Skills from './Skill/Skill';
import Project from './Project/Project';
import Work from './Work/Work';
import Contact from './Contact/Contact';

export default function Body() {
    return (
        <div className='body'>
            <section id ='intro'>
                <Intro></Intro>
            </section>
            
            <section id ='project'>
                <Project></Project>
            </section>
           
            <section id ='skill'>
                <Skills></Skills>
            </section>

            <section id ='work'>
                <Work></Work>
            </section>

            <section id ='contact'>
                <Contact></Contact>
            </section>
            
            
        </div>
    )
}
