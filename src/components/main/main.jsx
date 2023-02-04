
import './main.css'

//import images
import redberryStamp  from '../../assets/images/redbery-stamp.svg'
import redberryLogo from '../../assets/images/redbery-logo.svg'


const Main = () => {
    return (
        <div className="main-page">
            <div className='main-page-redberryLogo-container'>
                <img className='main-page-redberryLogo' src={redberryLogo} alt='redberry logo'/>
            </div>
                
            <button className='main-page-button'>რეზიუმეს დამატება</button>
            <img className='main-page-redberryStamp' src={redberryStamp}  alt='redberry Stamp'/>
        </div>
  
    )
}

export default Main;