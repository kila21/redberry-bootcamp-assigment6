import { Route, Routes } from 'react-router-dom';
// import {withRouter} from 'react-router'
import Info from '../info/info'
import LayoutRight from './LayoutRight/LayoutRight'

import './layout.css'
import { useState,useEffect } from 'react';
import Education from '../education/education';
import Experience from '../experience/experience';
import { set } from 'react-hook-form';


const Layout = (props) => {
    const [infoForm, setInfoForm] = useState()
    const [educationsArray, setEducationsArray] = useState()
    const [experiencesArray, setExperiencesArray] = useState()

    const degreeIdUpdate = educationsArray?.map((item,index) => {
        return {institute: item.institute, due_date: item.due_date, description: item.description, degree_id: educationsArray.length }
    })
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        experiences: [],
        educations: degreeIdUpdate,
        image: '',
        about_me: ''
    })

    const infoFormData = (form) => {
        setInfoForm(form)
    }

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
        setData({
            ...data,
            name: infoForm?.firstName,
            surname: infoForm?.lastName,
            email: infoForm?.email,
            phone_number: infoForm?.mobile.split(' ').join(''),
            experiences: experiencesArray,
            educations: degreeIdUpdate,
            image: dataURLtoFile(infoForm?.img, 'avatar.png'),
            about_me: infoForm?.aboutMe
        })
        
        console.log(data)
    },[infoForm,educationsArray,experiencesArray])

    useEffect(() => {
        const infoData = JSON.parse(sessionStorage.getItem('infoFormData'))
        const experienceData = JSON.parse(sessionStorage.getItem('experienceFormsData'))
        const educationData = JSON.parse(sessionStorage.getItem('educationFormsData'))
        
        if(infoData) {
            setInfoForm(infoData)
        }
        if(experienceData) {
            setExperiencesArray(experienceData)
        }
        if(educationData) {
            setEducationsArray(educationData)

        }
    },[])

    const educationFormsData = (forms) => {
        setEducationsArray(forms)
    }


    const experienceFormsData = (forms) => {
        setExperiencesArray(forms)
    }

    return (
        <div className='layout'>
            {/* <Info/> aq unda darenderdes routis shesabamisi page */}
           <div className='layout-left'>
                <Routes>
                    <Route path='/info' element={<Info update={infoFormData}/>}/>
                    <Route path='/experience' element={<Experience update={experienceFormsData}/>}/>
                    <Route path='/education' element={<Education update={educationFormsData} mainData={data}/>} />
                </Routes>
           </div>
            
            <div className='layout-right'>
                <LayoutRight infoForm={infoForm} educationForm={educationsArray} experienceForm={experiencesArray}/>
            </div>
        </div>
    )
}

export default Layout;