import './personInfo.css'

//import images

import emailSVG from '../../../assets/images/mail.svg'
import mobileSVG from '../../../assets/images/mobile.svg'


const PersonInfo = (props) => { 

    function urltoFile(url, filename, mimeType){
        return (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename,{type:mimeType});})
        );
    }

    const displayPersonInfo = () => {
        if(
            props.infoForm?.firstName || 
            props.infoForm?.lastName ||
            props.infoForm?.aboutMe ||
            props.infoForm?.img || 
            props.infoForm?.mobile || 
            props.infoForm?.email
        
        ) {
            return (
                <div className='personInfo-container'>
                    <div className='personInfo-container-fullname'>
                        <h1>{props.infoForm?.firstName} </h1>
                        <h1>{ props.infoForm?.lastName}</h1>
                    </div>

                    <div className='personInfo-container-email'>
                       {!props.infoForm?.email || <img src={emailSVG} alt='mail svg'/>}
                        <p>{props.infoForm?.email}</p>
                    </div>

                    <div className='personInfo-container-mobile'>
                       {!props.infoForm?.mobile || <img src={mobileSVG} alt='phone svg'/>}
                        <p>{props.infoForm?.mobile}</p>
                    </div>
                    
                    <div className='personInfo-container-aboutme'>
                        {!props.infoForm?.aboutMe || <h3>ჩემს შესახებ</h3>}
                        <p>{props.infoForm?.aboutMe}</p>
                    </div>
                
                    {!props.infoForm?.img || <img className='layout-right-info__img' src={props.infoForm?.img}/>}
                </div>
            )
        }
    }
    return(
            displayPersonInfo()
    )
}

export default PersonInfo;