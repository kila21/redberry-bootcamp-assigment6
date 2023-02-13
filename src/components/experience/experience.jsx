
import { isValidElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ExperienceForm from './experienceForm'
import './experience.css'

const Experience = (props) => {
    const navigate = useNavigate()
    const [isvalid, setIsValid] = useState(false)

    const getExperienceFromStorage = JSON.parse(sessionStorage.getItem('experienceFormsData'))
    const [experienceData, setExperienceData] = useState(
        getExperienceFromStorage ? 
        getExperienceFromStorage : 
        [
            {position: '', employer: '', start_date: '', due_date: '', description: ''}
        ]
    )

    const updateExperienceData = (index,form, isvalid) => {
        const updatedArray = experienceData.map((item,i) => {
            if(i === index) {
                return form
            }else {
                return item
            }
        })
        setExperienceData(updatedArray)
        setIsValid(isvalid)
    }   

    const addObject = () =>{
        if(isvalid) {
            const newData = [
                ...experienceData
            ]
            newData.push({position: '', employer: '', start_date: '', due_date: '', description: ''})
            setExperienceData(newData)
            setIsValid(false)
        }else {
            alert('გთხოვთ შეავსოთ ფორმა')
        }
    }

    useEffect(()=> {
        //aqedan unda  gadasced layouts data
        props.update(experienceData)
        sessionStorage.setItem('experienceFormsData', JSON.stringify(experienceData));

    },[experienceData,isvalid])

    const clickHandler = () => {
        navigate('/createCV/info')
    }

    const Submit = () => {
        if(isvalid) {
            navigate('/createCV/education')
        }else {
            alert('გთხოვთ შეავსოთ ფორმა')
       
        }
    }

    return (
        <div className='experience-container'>
             <div className='back'>
                    &lt;
                </div>

                <div className='education-title'>
                    <h1>გამოცდილება</h1>
                    <span>2/3</span>
            </div>

            {experienceData.map((item,index)=>{
                return <ExperienceForm key={index} index={index} update={updateExperienceData}/>
            })}

            <button onClick={addObject} className='experience-addNew-button'>სხვა გამოცდილების დამატება</button>
            <div className='bottom-buttons'>
                <button onClick={clickHandler} className='experience-button-back'>უკან</button>

                <button onClick={Submit} className='experience-button-done'>შემდეგი</button>
            </div>
        </div>
    )
}

export default Experience; 