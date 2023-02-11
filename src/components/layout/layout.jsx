import { Route, Routes } from 'react-router-dom';
// import {withRouter} from 'react-router'
import Info from '../info/info'
import LayoutRight from './LayoutRight/LayoutRight'

import './layout.css'
import { useState,useEffect } from 'react';
import Education from '../education/education';


const Layout = (props) => {
    const [infoForm, setInfoForm] = useState()
    const [educationsArray, setEducationsArray] = useState()

    const infoFormData = (form) => {
        setInfoForm(form)
    }

    useEffect(() => {
        if(sessionStorage.getItem('infoFormData')) {
            const infoData = JSON.parse(sessionStorage.getItem('infoFormData'))
            console.log(infoData)
            setInfoForm(infoData)
        }
    },[])

    const educationFormsData = (forms) => {
        setEducationsArray(forms)
    }

    return (
        <div className='layout'>
            {/* <Info/> aq unda darenderdes routis shesabamisi page */}
           <div className='layout-left'>
                <Routes>
                    <Route path='/info' element={<Info update={infoFormData}/>}/>
                    <Route path='/education' element={<Education update={educationFormsData}/>} />
                </Routes>
           </div>
            
            <div className='layout-right'>
                <LayoutRight infoForm={infoForm} educationForm={educationsArray}/>
            </div>
        </div>
    )
}

export default Layout;