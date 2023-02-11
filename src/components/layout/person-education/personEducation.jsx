import { useEffect } from 'react'
import './PersonEducation.css'


const PersonEducation = (props) => {

    const displayEducationContent = () => {
        if(props.educationForms) {
            return props.educationForms.map((item,index) => {
                return (
                    <div className="person-education-container">
                        {
                        !props.educationForms?.[index].institute &&
                        !props.educationForms?.[index].degree && 
                        !props.educationForms?.[index].due_date && 
                        !props.educationForms?.[index].description
                        ? '' 
                        : (<h3 className='person-education_title'>განათლება</h3>)}
                        <div className='person-education_info'>
                            <p>{props.educationForms?.[index].institute}</p>
                            <p>{props.educationForms?.[index].degree}</p>
                        </div>
                        <p className='person-education_date'>{props.educationForms?.[index].due_date}</p>
                        <p className='person-education_description'>{props.educationForms?.[index].description}</p>
                    </div>
                )
            })
        }
    }

    useEffect(()=>{
    },[props])
    return (
        displayEducationContent()
    )
}

export default PersonEducation;