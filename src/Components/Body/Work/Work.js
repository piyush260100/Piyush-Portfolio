import React from 'react';
import './Work.css'; 
import Separator from "../../Common/Separator/Separator"; 
import { WorkData } from '../../data/work';
import WorkCard from './WorkCard';

export default function Work() {

    const data=WorkData;
    return (
        <div className='work'>
            <Separator></Separator>
            <label className='section-title'>Work & Trainings</label>
            <div className='work-list'>
                {data.map((work)=>{
                    return(
                        <WorkCard work={work}></WorkCard>)

                })}
            </div>
            
        </div>
    )
}
