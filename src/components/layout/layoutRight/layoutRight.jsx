import {useEffect} from 'react'

import './layoutRight.css'

const LayoutRight = (props) => {

    console.log(props.infoForm, 'layoutright')    
    return (
        <div className='layout-right-container'>
            <div className='layout-right-info'>
                <div className='layout-right-info__content'>
                    <h1>{props.infoForm?.firstName + ' ' + props.infoForm?.lastName}</h1>
                    <p> <span>{props.infoForm?.email}</span> </p>
                    <p> <span>{props.infoForm?.mobile}</span> </p>
                    <div>
                        <h3>ჩემს შესახებ</h3>
                        <p>{props.infoForm?.aboutMe}</p>
                    </div>
                </div>
                <div className='layout-right-info__img'></div>
                <button>click</button>
            </div>
        </div>
    )
}

export default LayoutRight;