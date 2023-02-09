import { useForm } from 'react-hook-form'
import {useState, useEffect} from 'react'

import './info.css'
import valid from '../../assets/images/valid.svg'


const Info = (props) => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        img: '',
        aboutMe: '',
        email: '',
        mobile: '',
    });

    const {register, handleSubmit, formState: {errors,touchedFields}} = useForm({mode: 'all'})
 
    useEffect(()=>{
        props.update(data)
    },[data])

    //ქასთომ ვალიდაციები
    const validateGeorgianLetter = (value) => {
        const georgianCharacters = /^[ა-ჰ]+$/gm
        return  new RegExp(georgianCharacters).test(value)  
    }

    const validateEmail = (value) => {
        return value.endsWith('@redberry.ge')
    }

    const validateNumber = (value) => {
        const georgianNunmber = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/ 

        return new RegExp(georgianNunmber).test(value)
    }

    const addNumberSpace = (e) => {
        if(e.target.value.length === 3) {
            // console.log(e.target.value)
            // e.target.value += ' '
        }
    }

    const getImgValueFromInput =  (event) => {
        console.log('img')
        if (event.target.files && event.target.files[0]) {
            setData({
                ...data,img: URL.createObjectURL(event.target.files[0])
            })
            // setIData(URL.createObjectURL(event.target.files[0]));
          }
    }

    return (
        <form className='info' onSubmit={handleSubmit((data) => {
            // setData(data)
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
                        className={errors.firstName?.message ? 'error' : ' '}
                        id='name' 
                        onKeyUp={(e) => setData({...data,firstName: e.target.value})} 
                        type='text' 
                        {
                            ...register('firstName', 
                            {required: 'მინიმუმ 2 ასო, ქართული ასოები', 
                            minLength: {value: 2, message: 'მინიმუმ 2 ასო, ქართული ასოები'},
                            validate: (value) => validateGeorgianLetter(value) || 'მინიმუმ 2 ასო, ქართული ასოები'})
                        }
                    />
                    <p>{errors.firstName?.message}</p>
                    {(!errors.firstName?.message && touchedFields.firstName) && (<img className='valid' src={valid} alt='valid.svg'/>)}
                </div>
               
                <div className='info-person__surname'>
                    <label htmlFor='lastname'>გვარი</label>
                    <input 
                        id='lastname'
                        className={errors.lastName?.message ? 'error' : ' '}
                        onKeyUp={(e) => setData({...data,lastName: e.target.value})}
                        type='text'
                        {
                            ...register('lastName',
                            {required: 'მინიმუმ 2 ასო, ქართული ასოები',
                            minLength: {value: 2, message: 'მინიმუმ 2 ასო, ქართული ასოები'},
                            validate: (value) => validateGeorgianLetter(value) || 'მინიმუმ 2 ასო, ქართული ასოები'
                        })
                        }
                    />
                    <p>{errors.lastName?.message}</p>
                    {/* <img className='valid' src={valid} alt='valid.svg'/> */}
                    {(!errors.lastName?.message && touchedFields.lastName) && (<img className='valid' src={valid} alt='valid.svg'/>)}
                </div>
                

            </div>
            
            <div className='info-img'>
                <label className={errors.img?.message ? 'error' : ' '} htmlFor='upload'>პირადი ფოტოს ატვირთვა</label>
                <label className='input' htmlFor='upload'>ატვირთვა</label>
                <input
                 type='file' 
                 id='upload' 
                 {...register('img', {required: 'ატვირთეთ ფოტო'})}
                 onChange={(event) => getImgValueFromInput(event)} 
                 />
                {/* <div  for='upload'></div> */}
            </div>

            <div className='info-textarea'>
                <label htmlFor='aboutMe'>ჩემ შესახებ (არასავალდებულო)</label>
                <textarea id='aboutMe' onKeyUp={(e) => setData({...data,aboutMe: e.target.value})} ></textarea>
            </div>

            <div className='info-email'>
                <label htmlFor='email'>ელ.ფოსტა</label>
                <input 
                    className={errors.email?.message ? 'error' : ' '}
                    id='email' 
                    type='email' 
                    {...register('email',
                        {required: 'უნდა მთავრდებოდეს @redberry.ge-ით',
                        validate: (value) => validateEmail(value) || 'უნდა მთავრდებოდეს @redberry.ge-ით'
                        })
                    }
                    onKeyUp={(e) => setData({...data,email: e.target.value})} 
                />
                <p>{errors.email?.message}</p>
                {(!errors.email?.message && touchedFields.email) && (<img className='valid' src={valid} alt='valid.svg'/>)}
            </div>

            <div className='info-mobile'>
                <label>მობილურის ნომერი</label>
                <input
                    className={errors.mobile?.message ? 'error' : ' '}
                    type="text" 
                    // onKeyDown={(e) => addNumberSpace(e)}
                    {...register('mobile', 
                        {required: 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს',
                         validate: (value) => validateNumber(value) || 'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
                        })
                
                    }

                    onKeyUp={(e) => setData({...data,mobile: e.target.value})} 
                    />
                <p>{errors.mobile?.message}</p>
               
                {(!errors.mobile?.message && touchedFields.mobile) && (<img className='valid' src={valid} alt='valid.svg'/>)}
            </div>

            <div className='info-submit'>
                <input type='submit' value='შემდეგი'/>
            </div>
        </form>
    )
}

export default Info;