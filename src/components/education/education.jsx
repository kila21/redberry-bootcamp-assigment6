import { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './education.css'
import EducationForm from './educationForm';

const Education = (props) => {

    const [educationsData, setEducationsData] = useState([
        {institute: 'ragaca', degree: '', due_date: '', description: ''},
        // {institute: 'ragaca', degree: '', due_date: '', description: ''}
    ]);
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate('/createCV/info')
    }

    const updateEducationsData = (index,form) => {
        // console.log(index,form)
        const updatedArray = educationsData.map((item,i)=>{
            if(i === index) {
                return form
            }else {
                return item
            }
        })
        setEducationsData(updatedArray)
    }

    const addObject =  () => {
        const newData = [
            ...educationsData,
        ]
        newData.push({institute: '', degree: '', due_date: '', description: ''})
        setEducationsData(newData)
        // console.log(educations)
    }

    useEffect(()=>{
        props.update(educationsData)
        console.log(educationsData)
    },[educationsData])

    return (
        <div className='education-container'>
              <div className='back'>
                    &lt;
                </div>

                <div className='education-title'>
                    <h1>განათლება</h1>
                    <span>3/3</span>
                </div>
            {educationsData.map((item, index) => {
                // return addEducations(index)
                return <EducationForm key={index} index={index} update={updateEducationsData}/>
            })}
            <button onClick={addObject} className='education-addNew-button'>სხვა სასწავლებლის დამატება</button>
            <div className='bottom-buttons'>
                <button onClick={clickHandler} className='education-button-back'>უკან</button>

                <button className='education-button-done'>დასრულება</button>
            </div>
        </div>
    )
}

export default Education;