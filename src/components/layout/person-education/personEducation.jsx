import { useEffect } from 'react'
import './PersonEducation.css'


const PersonEducation = (props) => {

    const displayEducationContent = () => {
        if(props.educationForms) {
            return props.educationForms.map((item,index) => {
                return (
                    <div key={index} className="person-education-container">
                        {
                        !item.institute &&
                        !item.degree && 
                        !item.due_date && 
                        !item.description
                        ? '' 
                        : (<h3 className='person-education_title'>განათლება</h3>)}
                        <div className='person-education_info'>
                            <p>{item.institute}</p>
                            <p>{item.degree}</p>
                        </div>
                        <p className='person-education_date'>{item.due_date}</p>
                        <p className='person-education_description'>{item.description}</p>
                    </div>
                )
            })
        }
    }


    return (
        displayEducationContent()
    )
}

export default PersonEducation;