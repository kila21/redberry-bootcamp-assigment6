import PersonInfo from '../person-info/personInfo';

import './layoutRight.css'

const LayoutRight = (props) => {
  
    return (
        <div className='layout-right-container'>
            <div className='layout-right-info'>
                <PersonInfo infoForm={props.infoForm}/>
            </div>

            <div className='layout-right-experience'>

            </div>

            <div className='layout-right-education'>

            </div>
        </div>
    )
}

export default LayoutRight;