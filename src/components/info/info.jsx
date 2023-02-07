import { useForm } from 'react-hook-form'
import {useState, useEffect} from 'react'

import './info.css'


const Info = (props) => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        img: '',
        aboutMe: '',
        email: '',
        mobile: '',
    });

    const {register, handleSubmit, formState: {errors}} = useForm()

    useEffect(()=>{
        props.update(data)
    },[data])

    return (
        <form className='info' onSubmit={handleSubmit((data) => {
            console.log(data)
            updateHandler()
            setData(data)
        })}>
            <div className='back'>
                &lt;
            </div>

            <div className='info-title'>
                <h1>პირადი ინფო</h1>
                <span>1/3</span>
            </div>

            <div className='info-person'>
                <div className='info-person__name'>
                    <label htmlFor='name'>სახელი</label>
                    <input
                        id='name' 
                        onKeyUp={(e) => setData({...data,firstName: e.target.value})} 
                        type='text' 
                        {...register('firstName', {required: 'მინიმუმ 2 ასო, ქართული ასოები'})}
                    />
                    <p>{errors.firstName?.message}</p>
                </div>
               
                <div className='info-person__surname'>
                    <label htmlFor='lastname'>გვარი</label>
                    <input id='lastname'
                        onKeyUp={(e) => setData({...data,lastName: e.target.value})}
                        type='text'
                        {...register('lastName', {required: 'მინიმუმ 2 ასო, ქართული ასოები', minLength: 2})}
                    />
                    <p>{errors.lastName?.message}</p>
                </div>
                

            </div>
            
            <div className='info-img'>
                <label htmlFor='upload'>პირადი ფოტოს ატვირთვა</label>
                <label className='input' htmlFor='upload'>ატვირთვა</label>
                <input type='file' id='upload' />
                {/* <div  for='upload'></div> */}
            </div>

            <div className='info-textarea'>
                <label htmlFor='aboutMe'>ჩემ შესახებ (არასავალდებულო)</label>
                <textarea id='aboutMe' onKeyUp={(e) => setData({...data,aboutMe: e.target.value})} ></textarea>
            </div>

            <div className='info-email'>
                <label htmlFor='email'>ელ.ფოსტა</label>
                <input 
                    id='email' 
                    type='email' 
                    {...register('email', {required: 'უნდა მთავრდებოდეს @redberry.ge-ით'})}
                    onKeyUp={(e) => setData({...data,email: e.target.value})} 
                />
                <p>{errors.email?.message}</p>
            </div>

            <div className='info-mobile'>
                <label>მობილურის ნომერი</label>
                <input
                    type="number" 
                    {...register('mobile', {required: 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'})}
                    onKeyUp={(e) => setData({...data,mobile: e.target.value})} 
                    />
                <p>{errors.mobile?.message}</p>
            </div>

            <div className='info-submit'>
                <input type='submit' value='შემდეგი'/>
            </div>
        </form>
    )
}

export default Info;