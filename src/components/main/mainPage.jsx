
import './mainPage.css'

//import images
import redberryStamp  from '../../assets/images/redbery-stamp.svg'
import redberryLogo from '../../assets/images/redbery-logo.svg'
import { useNavigate } from 'react-router-dom'


const MainPage = () => {
    const navigate = useNavigate()

    //redirect to info component to create a cv
    const clickHandler = () => {
        navigate('/createCV/info')
    }


    return (
        <div className="main-page">
            <div className='main-page-redberryLogo-container'>
                <img className='main-page-redberryLogo' src={redberryLogo} alt='redberry logo'/>
            </div>
                
            <button className='main-page-button' onClick={clickHandler}>რეზიუმეს დამატება</button>
            <img className='main-page-redberryStamp' src={redberryStamp}  alt='redberry Stamp'/>
        </div>
  
    )
}

export default MainPage;