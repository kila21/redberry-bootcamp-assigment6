

import { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'

import valid from '../../assets/images/valid.svg'
import invalid from '../../assets/images/invalid.svg'

import './experienceForm.css'


const ExperienceForm = (props) => {
    const [experienceFormData, setExperienceFormData] = useState(
        {position: '', employer: '', start_date: '', due_date: '', description: ''}
    )

    const getDataFromStorage = JSON.parse(sessionStorage.getItem('experienceFormsData'));
    const {register, formState: {errors,isValid, touchedFields}, getValues} = useForm({
        mode: 'all',
        defaultValues: async () => {
            setExperienceFormData({
                ...experienceFormData,
                position: getDataFromStorage?.[props.index]?.position,
                employer: getDataFromStorage?.[props.index]?.employer,
                start_date: getDataFromStorage?.[props.index]?.start_date,
                due_date: getDataFromStorage?.[props.index]?.due_date,
                description: getDataFromStorage?.[props.index]?.description,
            })
            return {
                position: getDataFromStorage?.[props.index]?.position || '',
                employer: getDataFromStorage?.[props.index]?.employer || '',
                start_date: getDataFromStorage?.[props.index]?.start_date || '',
                due_date: getDataFromStorage?.[props.index]?.due_date || '',
                description: getDataFromStorage?.[props.index]?.description || '',
            }
        }
    })

    useEffect(()=>{
        props.update(props.index,experienceFormData, isValid)
    },[experienceFormData])

    return (
        <form className='experience-form'>
            <div className='experience-form-position'>
                <label htmlFor='position'>თანამდებობა</label>
                <input 
                className={!errors.position && touchedFields?.position ? 'valid-input' : ''}
                placeholder='თანამდებობა'
                id='position' 
                type='text'
                {...register('position', {required : true,minLength: 2})}
                onKeyUp={(e) => setExperienceFormData({...experienceFormData,position: e.target.value})}
                />
                <p>მინიმუმ 2 სიმბოლო,</p>
                {
                !errors?.position && touchedFields?.position ? 
                <img className='valid-icon' src={valid} alt='valid.svg'/> :
                <img className='invalid-icon' src={invalid} alt='invalid.svg'/> 
                }
                
            </div>

            <div className='experience-form-employer'>
                <label htmlFor='employer'>დამსაქმებელი</label>
                <input 
                className={!errors.employer && touchedFields?.employer ? 'valid-input' : ''}
                placeholder='დამსაქმებელი'
                type='text'
                id='employer'
                {...register('employer', {required : true,minLength: 2})}
                onKeyUp={(e) => setExperienceFormData({...experienceFormData,employer: e.target.value})}
                />
                <p>მინიმუმ 2 სიმბოლო,</p>   
                {
                !errors?.employer && touchedFields?.employer ? 
                <img className='valid-icon' src={valid} alt='valid.svg'/> :
                <img className='invalid-icon' src={invalid} alt='invalid.svg'/> 
                }
            </div>

            <div className='experience-form-date'>
                <div >
                    <label htmlFor='start-date'>დაწყების რიცხვი</label>
                    <input 
                    className={!errors.start_date && touchedFields?.start_date ? 'valid-input': ''}
                    id='start-date' 
                    type='date' 
                    {...register('start_date', {required : true})}
                    onChange={(e) => setExperienceFormData({...experienceFormData,start_date: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor='due-date'>დამთავრების რიცხვი</label>
                    <input 
                    className={!errors.due_date && touchedFields?.due_date ? 'valid-input' : ''}
                    id='due-date' 
                    type='date' 
                    {...register('due_date', {required : true})}
                    onChange={(e) => setExperienceFormData({...experienceFormData,due_date: e.target.value})}
                    />
                </div>
                
            </div>

            <div className='experience-form-description'>
                <label htmlFor='description'>აღწერა</label>
                <textarea 
                className={!errors.description && touchedFields?.description ? 'valid-input' : ''}
                id='description'
                {...register('description', {required : true})}
                onKeyUp={(e) => setExperienceFormData({...experienceFormData,description: e.target.value})}
                ></textarea>
                {/* <img className='invalid-icon' src={invalid} alt='invalid.svg'/> */}
            </div>

        </form>
    )
}

export default ExperienceForm;