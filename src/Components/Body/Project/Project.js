import React from 'react';
import './Project.css';
import { ProjectData} from '../../data/project';
import Projectcard from './Project-card';
import Separator from '../../Common/Separator/Separator';

export default function Project() {

    const data=ProjectData;
    return (
        <div className='project'>

            <Separator></Separator>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return <Projectcard project={project}></Projectcard>
                })}

            </div>
        </div>
    )
}
