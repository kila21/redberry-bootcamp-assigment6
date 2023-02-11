import PersonEducation from '../person-education/personEducation';
import PersonInfo from '../person-info/personInfo';

import './layoutRight.css'

const LayoutRight = (props) => {
    console.log(props)
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

            </div>

            <div className='layout-right-education'>
                <PersonEducation educationForms={props.educationForm}/>
            </div>
        </div>
    )
}

export default LayoutRight;