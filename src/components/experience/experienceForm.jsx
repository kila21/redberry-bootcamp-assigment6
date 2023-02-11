

import './experienceForm.css'

import valid from '../../assets/images/valid.svg'
import invalid from '../../assets/images/invalid.svg'

const ExperienceForm = () => {
    return (
        <form className='experience-form'>
            <div className='experience-form-position'>
                <label htmlFor='position'>თანამდებობა</label>
                <input 
                placeholder='თანამდებობა'
                id='position' 
                type='text'
                />
                <p>მინიმუმ 2 სიმბოლო,</p>
                <img className='valid-icon' src={valid} alt='valid.svg'/>
                <img className='invalid-icon' src={invalid} alt='invalid.svg'/>
            </div>

            <div className='experience-form-employer'>
                <label htmlFor='employer'>დამსაქმებელი</label>
                <input 
                placeholder='დამსაქმებელი'
                type='text'
                id='employer'
                />
                <p>მინიმუმ 2 სიმბოლო,</p>   
                <img className='valid-icon' src={valid} alt='valid.svg'/>
                <img className='invalid-icon' src={invalid} alt='invalid.svg'/>
            </div>

            <div className='experience-form-date'>
                <div >
                    <label htmlFor='start-date'>დაწყების რიცხვი</label>
                    <input id='start-date' type='date' />
                </div>

                <div>
                    <label htmlFor='due-date'>დამთავრების რიცხვი</label>
                    <input id='due-date' type='date' />
                </div>
                
            </div>

            <div className='experience-form-description'>
                <label htmlFor='description'>აღწერა</label>
                <textarea id='description'></textarea>
                {/* <img className='invalid-icon' src={invalid} alt='invalid.svg'/> */}
            </div>

        </form>
    )
}

export default ExperienceForm;