import { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './education.css'
import EducationForm from './educationForm';

const Education = (props) => {
    
    const getEducationsFromStorage = JSON.parse(sessionStorage.getItem('educationFormsData'))
    const [educationsData, setEducationsData] = useState(
        getEducationsFromStorage ? 
        getEducationsFromStorage : 
        [
        {institute: 'ragaca', degree: '', due_date: '', description: ''},
        ]);

    const [isValid,setIsValid] = useState(false)
    const [educatonsLength,setEducationsLength] = useState(getEducationsFromStorage ? getEducationsFromStorage.length : 1)
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate('/createCV/info')
    }

    console.log(educationsData)
    const updateEducationsData = (index,form, isValid) => {
        setIsValid(isValid)
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
        if(isValid) {
            const newData = [
                ...educationsData,
            ]
            newData.push({institute: '', degree: '', due_date: '', description: ''})
            setEducationsData(newData)
            setIsValid(false);
        }else {
            alert('გთხოვთ შეავსოთ განათლების ფორმა')
        }

        // console.log(educations)
    }


    const Submit = () => {
        if(isValid) {
            sessionStorage.setItem('educationFormsData', JSON.stringify(educationsData));
            navigate('/createCV/info');
        }else {
            alert('გთხოვთ შეავსოთ ფორმა')
        }
    }

    useEffect(()=>{
        props.update(educationsData)
        sessionStorage.setItem('educationFormsData', JSON.stringify(educationsData));
    },[educationsData, isValid])

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

                <button onClick={Submit} className='education-button-done'>დასრულება</button>
            </div>
        </div>
    )
}

export default Education;