import { useEffect } from 'react';
import PersonEducation from '../person-education/personEducation';
import PersonExperience from '../person-experience/personExperience';
import PersonInfo from '../person-info/personInfo';

import './layoutRight.css'

const LayoutRight = (props) => {

    return (
        <div className='layout-right-container'>
            {props?.infoForm ? (
                <div className='layout-right-info'>
                <PersonInfo infoForm={props.infoForm}/>
            </div>
            ): ''}
            {/* <div className='layout-right-info'>
                <PersonInfo infoForm={props.infoForm}/>
            </div> */}

            <div className='layout-right-experience'>
                <PersonExperience experienceForms={props.experienceForm}/>
            </div>

            <div className='layout-right-education'>
                <PersonEducation educationForms={props.educationForm} mainData={props.mainData}/>
            </div>
        </div>
    )
}

export default LayoutRight;