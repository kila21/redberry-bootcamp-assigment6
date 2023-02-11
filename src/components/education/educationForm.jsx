import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axios from 'axios'

import './educationForm.css'

const EducationForm =  (props) => {
    const url = 'https://resume.redberryinternship.ge/api/degrees'
    const [educationData, setEducationData] = useState(
        {institute: '', degree: '', due_date: '', description: ''}
    )
    const [degrees, setDegrees] = useState()

    const getDataFromStorage = JSON.parse(sessionStorage.getItem('educationFormsData'));
    const {register, formState: {errors,isValid, touchedFields}, getValues} = useForm({
        mode: 'all',
        defaultValues: async () => {
            setEducationData({
                ...educationData,
                institute: getDataFromStorage?.[props.index]?.institute,
                degree: getDataFromStorage?.[props.index]?.degree,
                due_date: getDataFromStorage?.[props.index]?.due_date,
                description: getDataFromStorage?.[props.index]?.description
            })

           return {
                institute: getDataFromStorage?.[props.index]?.institute || '',
                degree: getDataFromStorage?.[props.index]?.degree || '',
                due_date: getDataFromStorage?.[props.index]?.due_date || '',
                description: getDataFromStorage?.[props.index]?.description || ''
            }
        }
    })
    console.log(getDataFromStorage?.[props.index]?.due_date)
    useEffect(()=>{
        props.update(props.index, educationData, isValid)
    },[educationData])

    useEffect(()=> {
        axios.get(url).then((data)=>{
            setDegrees(data.data)
        })
    },[])
    return (
        <form className='education'>
            <div className='education-school'>
                <label htmlFor='institute'>სასწავლებელი</label>
                <input 
                type="text" 
                id='institute' 
                placeholder='სასწავლებელი'
                className={!errors?.institute && touchedFields?.institute ? 'validEducationInput' : ''}
                {...register('institute',{required: 'მინიმუმ 2 სიმბოლო', minLength: 2})}
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
                    id='degree' 
                    className={!errors?.degree && !touchedFields?.degree ? '' : 'validEducationInput'}
                    >
                        <option value="" disabled selected hidden>აირჩიეთ ხარისხი</option>
                        {/* <option value="ბაკალავრი">ბაკალავრი</option>
                        <option value='სტუდენტი'>სტუდენტი</option> */}
                        {degrees?.map((item)=>{
                            return <option key={item.id} value={item.title}>{item.title}</option>
                        })}
                    </select>
                </div>

                <div className='education-date'>
                    <label htmlFor='date'>დამთავრების რიცხვი</label>
                    <input 
                    {...register('due_date', {required: true})} 
                        onChange={(e)=> setEducationData({...educationData,due_date: e.target.value})} 
                        type="date" 
                        id='date' 
                        className={!errors?.due_date && touchedFields.due_date ? 'validEducationInput': ''}
                        />
                </div>
            </div>

            <div className='education-textarea'>
                <label htmlFor='textarea'>აღწერა</label>
                <textarea 
                    {...register('description',{required: 'აუცილებელია'})}
                    onKeyUp={(e) => setEducationData({...educationData,description: e.target.value}) } 
                    id='textarea' 
                    placeholder='განათლების აღწერა'
                    className={!errors?.description && touchedFields.description ? 'validEducationInput': ''}
                    ></textarea>
            </div>
    </form>
    )
}

export default EducationForm;