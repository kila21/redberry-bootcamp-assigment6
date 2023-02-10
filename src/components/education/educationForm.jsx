import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import './educationForm.css'

const EducationForm =  (props) => {
    const [educationData, setEducationData] = useState(
        {institute: 'ragaca', degree: '', due_date: '', description: ''}
    )

    const {register, formState: {errors}} = useForm({
        mode: 'all'
    })
    useEffect(()=>{
        props.update(props.index, educationData)
    },[educationData])

    return (
        <form className='education'>
            <div className='education-school'>
                <label htmlFor='institute'>სასწავლებელი</label>
                <input 
                type="text" 
                id='institute' 
                placeholder='სასწავლებელი'
                {...register('institute',{required: 'მინიმუმ 2 სიმბოლო'})}
                onKeyUp={(e) => setEducationData({...educationData,institute: e.target.value}) }
                
                />
                <p>მინიმუმ 2 სიმბოლო</p>
            </div>

            <div className='education-degree-date'>
                <div className='education-degree'>
                    <label htmlFor='degree'>ხარისხი</label>
                    <select 
                    {...register('degree',{required: true})}
                    onInput={(e) => setEducationData({...educationData,degree: e.target.value})} 
                    type="select"
                    id='degree' >
                        <option value="ბაკალავრი">ბაკალავრი</option>
                        <option value='სტუდენტი'>სტუდენტი</option>
                    </select>
                </div>

                <div className='education-date'>
                    <label htmlFor='date'>დამთავრების რიცხვი</label>
                    <input onChange={(e)=> setEducationData({...educationData,due_date: e.target.value})} type="date" id='date' />
                </div>
            </div>

            <div className='education-textarea'>
                <label htmlFor='textarea'>აღწერა</label>
                <textarea 
                    {...register('description',{required: 'აუცილებელია'})}
                    onKeyUp={(e) => setEducationData({...educationData,description: e.target.value}) } 
                    id='textarea' 
                    placeholder='განათლების აღწერა'></textarea>
            </div>
    </form>
    )
}

export default EducationForm;