import './personInfo.css'

//import images

import emailSVG from '../../../assets/images/mail.svg'
import mobileSVG from '../../../assets/images/mobile.svg'


const PersonInfo = (props) => { 
    console.log(props)
    return(
            <div className='personInfo-container'>
            <div className='personInfo-container-fullname'>
                <h1>{props.infoForm?.firstName} </h1>
                <h1>{ props.infoForm?.lastName}</h1>
            </div>

            <div className='personInfo-container-email'>
                <img src={emailSVG} alt='mail svg'/>
                <p>{props.infoForm?.email}</p>
            </div>

            <div className='personInfo-container-mobile'>
                <img src={mobileSVG} alt='phone svg'/>
                <p>{props.infoForm?.mobile}</p>
            </div>
            
            <div className='personInfo-container-aboutme'>
                <h3>ჩემს შესახებ</h3>
                <p>{props.infoForm?.aboutMe}</p>
            </div>
           
            <img className='layout-right-info__img' src={props.infoForm?.img}/>
            
        </div>
    )
}

export default PersonInfo;