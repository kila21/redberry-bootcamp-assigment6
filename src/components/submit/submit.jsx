import { useEffect, useState } from "react";
import axios from "axios";

import './submit.css'
import mail from '../../assets/images/mail.svg'
import mobile from '../../assets/images/mobile.svg'
import { useNavigate } from "react-router-dom";


const Submit = () => {
    const navigate = useNavigate()

    const [data, setData] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [message, setMessage] = useState(true)
    const [error, setError] = useState()

    function dataURLtoFile(dataurl, filename) {
        if(dataurl) {
            var arr = dataurl?.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            
            return new File([u8arr], filename, {type:mime});
        }
    }
    
   
    useEffect(() => {
        //for axios post
        const mainData = JSON.parse(sessionStorage.getItem('mainData'))
        const imageForPost = dataURLtoFile(mainData?.image, 'avatar.png')

        const newData = {...mainData, image: imageForPost}
        // const newData = {...mainData}
        const url = 'https://resume.redberryinternship.ge/api/cvs'

        axios.post(url,newData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        }).then((data)=>{
            if(data.status === 201) {
                sessionStorage.clear()
                setData(data.data)
                setImageUrl('https://resume.redberryinternship.ge/' + data.data.image)
            }
        }).catch((err) => {
            setError(err.message)
        })
    },[])

    // const backClickHandler = () => {
    //     // sessionStorage.clear()
    //     console.log('clicked')
    //     navigate('/');
    // }

    const displaySubmit = () => {
        if(data) {
            return      <div className="submit-container">
            <div onClick={() => navigate('/')} className="back">
                 &lt;
            </div>

            <div className="submit">
                <div className="submit-info" >
                    <h1>{data?.name + '  ' + data?.surname}</h1>
                    <div className="mail">
                        <img src={mail} alt='mail.svg'/>
                        <p>{data?.email}</p>
                    </div>
                    <div className="mobile">
                        <img src={mobile} alt='mobile.svg'/>
                        <p>{data?.phone_number}</p>
                    </div>
                    <div className="aboutMe">
                        <h3>ჩემ შესახებ</h3>
                        <p>{data?.about_me}</p>
                    </div>
                    <img className="submit-person" src={imageUrl}/>
                </div>

                {data?.experiences.map((item,index) => {
                    return displayExperiences(item,index)
                })}

                {data?.educations.map((item,index) => {
                    return displayEducations(item,index)
                })}
            </div>
            {displayMessage(message)}
        </div>
        }else {
            console.log(error)
            // alert(error)
        }
    }

    const displayExperiences = (item,index) => {
        return (
            <div key={item+index} className="submit-experiences">
                <h3>გამოცდილება</h3>
                <div className="submit-experiences-position">
                    <p>{item.position}</p>
                    <p>{item.employer}</p>
                </div>
                <p className="submit-experiences-date">{item.start_date + ' - ' + item.due_date}</p>
                <p className="submit-experiences-text">{item.description}</p>
            </div>
        )
    }

    const displayEducations = (item,index) => {
        return (
            <div key={item+index} className="submit-educations">
                <h3>განათლება</h3>
                <div className="submit-educations-institute">
                    <p>{item.institute}</p>
                    <p>{item.degree}</p>
                </div>
                <p className="submit-educations-date">{item.due_date}</p>
                <p className="submit-educations-text">{item.description}</p>
            </div>
        )
    }

    const displayMessage = (message) => {
        if(message) {
            return (
                <div className="message">
                    <div onClick={() => {setMessage(false)}}>X</div>
                    <h1>რეზიუმე წარმატებით გაიგზავნა 🎉</h1>
                </div>
            )
        }else {
            return
        }
      
    }

    // sessionStorage.setItem('educationFormsData', JSON.stringify(educationsData));
    // const imgURL = 'https://resume.redberryinternship.ge/' + data?.image;

    return (
        displaySubmit()
    )

}

export default Submit;