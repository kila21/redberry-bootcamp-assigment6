import { get, set, useForm } from 'react-hook-form'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import './info.css'

import valid from '../../assets/images/valid.svg'
import inValid from '../../assets/images/invalid.svg'




const Info = (props) => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        img: '',
        aboutMe: '',
        email: '',
        mobile: '',
    });

    
    
    const navigate = useNavigate()
    const getInfoFormData = JSON.parse(sessionStorage.getItem('infoFormData'))

    function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }

    


    const {register,unregister, handleSubmit, formState: {errors,touchedFields, isValid}, getValues,setValue} = useForm({
        mode: 'all',
        defaultValues: async () => {
            setData({
                ...data,
                firstName: getInfoFormData?.firstName,
                lastName: getInfoFormData?.lastName,
                img: getInfoFormData?.img,
                aboutMe: getInfoFormData?.aboutMe,
                email: getInfoFormData?.email,
                mobile: getInfoFormData?.mobile
            })
            const imgtoLoad = getInfoFormData?.img ? await dataURLtoFile(getInfoFormData?.img,'avatar.png') : ''
           
            return {
                firstName: getInfoFormData?.firstName || '',
                lastName: getInfoFormData?.lastName || '',
                // img: imgtoLoad,
                aboutMe: getInfoFormData?.aboutMe || '',
                email: getInfoFormData?.email || '',
                mobile: getInfoFormData?.mobile || ''
            }
        }
    })
    useEffect(() => {
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

    const getImgValueFromInput =  (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader()

            reader.readAsDataURL(event.target.files[0])
            reader.addEventListener('load', () => {
                setData({
                    ...data,img: reader.result
                })
            })
                
          }
        
    }

    return (
        <form className='info' onSubmit={handleSubmit((d) => {
            if(isValid) {
                // setData(data)
                sessionStorage.setItem('infoFormData', JSON.stringify(data))
                navigate('/createCV/experience')
            }
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
                        placeholder='სახელი'
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
                        placeholder='გვარი'
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
                    {(!errors.lastName?.message && touchedFields.lastName) && (<img className='valid' src={valid} alt='valid.svg'/>)}
                </div>
                

            </div>
            
            <div className='info-img'>
                <label className={errors.img?.message ? 'error' : ' '}  htmlFor='upload'>პირადი ფოტოს ატვირთვა</label>
                <label className='input'>ატვირთვა</label>
                <input
                 type='file' 
                 id='upload' 
                 onInput={(event) => getImgValueFromInput(event)} 
                 {...register('img', {required: 'ატვირთეთ ფოტო'})}
                 />
            </div>

            <div className='info-textarea'>
                <label htmlFor='aboutMe'>ჩემ შესახებ (არასავალდებულო)</label>
                <textarea 
                {...register('aboutMe',)}
                id='aboutMe' 
                onKeyUp={(e) => setData({...data,aboutMe: e.target.value})} >

                </textarea>
            </div>

            <div className='info-email'>
                <label htmlFor='email'>ელ.ფოსტა</label>
                <input 
                    placeholder='email@redberry.ge'
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
                    placeholder='+995 555 55 55 55'
                    className={errors.mobile?.message ? 'error' : ' '}
                    type="text" 
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