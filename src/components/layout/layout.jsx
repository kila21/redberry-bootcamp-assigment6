import { Route, Routes } from 'react-router-dom';
import Info from '../info/info'
import LayoutRight from './LayoutRight/LayoutRight'

import './layout.css'
import { useState } from 'react';


const Layout = (props) => {
    const [infoForm, setInfoForm] = useState()

    const infoFormData = (form) => {
        setInfoForm(form)
        console.log(form)
    }

    return (
        <div className='layout'>
            {/* <Info/> aq unda darenderdes routis shesabamisi page */}
           <div className='layout-left'>
                <Routes>
                    <Route path='/info' element={<Info update={infoFormData}/>}/>
                    <Route path='/education' element={<div>Education</div>} />
                </Routes>
           </div>
            
            <div className='layout-right'>
                <LayoutRight infoForm={infoForm}/>
            </div>
        </div>
    )
}

export default Layout