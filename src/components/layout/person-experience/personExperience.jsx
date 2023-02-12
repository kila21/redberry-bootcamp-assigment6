import './personExperience.css'

import { useEffect } from 'react'

const PersonExperience = (props) =>{
    const displayPersonExperiences = () => {
        console.log(props)
        if(props.experienceForms) {
            return props.experienceForms.map((item,index) => {
                return (
                    <div key={index} className="person-experience-container">
                        {
                            !item.position && 
                            !item.employer &&
                            !item.start_date && 
                            !item.due_date &&
                            !item.description 
                        ? '' 
                        : (<h3 className='person-experience_title'>გამოცდილება</h3>)}
                        <div className='person-experience_info'>
                            <p>{item.position}</p>
                            <p>{item.employer}</p>
                        </div>
                        <div className='person-experience_date'>
                            <p >{item.start_date}</p>
                            <p >{item.due_date}</p>
                        </div>
                        <p className='person-experience_description'>{item.description}</p>
                    </div>
                )
            })
        }
       
    }



    return (
        displayPersonExperiences()
    )
}

export default PersonExperience;