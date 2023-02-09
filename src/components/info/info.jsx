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

    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'all'})
 
    useEffect(()=>{
        props.update(data)

    },[data])

    console.log(errors)

    const getImgValueFromInput =  (event) => {
        if (event.target.files && event.target.files[0]) {
            setData({
                ...data,img: URL.createObjectURL(event.target.files[0])
            })
            // setIData(URL.createObjectURL(event.target.files[0]));
          }
    }

    return (
        <form className='info' onSubmit={handleSubmit((data) => {
            console.log(data)
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
                        {
                            ...register('firstName', 
                            {required: 'მინიმუმ 2 ასო, ქართული ასოები', 
                            minLength: {value: 2, message: 'მინიმუმ 2 ასო, ქართული ასოები'}})
                        }
                    />
                    <p>{errors.firstName?.message}</p>
                </div>
               
                <div className='info-person__surname'>
                    <label htmlFor='lastname'>გვარი</label>
                    <input id='lastname'
                        onKeyUp={(e) => setData({...data,lastName: e.target.value})}
                        type='text'
                        {
                            ...register('lastName',
                            {required: 'მინიმუმ 2 ასო, ქართული ასოები',
                            minLength: {value: 2, message: 'მინიმუმ 2 ასო, ქართული ასოები'}})
                        }
                    />
                    <p>{errors.lastName?.message}</p>
                </div>
                

            </div>
            
            <div className='info-img'>
                <label htmlFor='upload'>პირადი ფოტოს ატვირთვა</label>
                <label className='input' htmlFor='upload'>ატვირთვა</label>
                <input type='file' id='upload' onChange={(event) => getImgValueFromInput(event)} />
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