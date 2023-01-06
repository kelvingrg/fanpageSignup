import React, { useState } from 'react'
import './Body.css'
import FanSignUp from './FanSignUp/FanSignUp';
import TalentSignUp from './TalentSignUp/TalentSignUp';

function Body() {
    const [tab, setTab]=useState(1);
   const setTabActive=(tab)=>{
setTab(tab)
    }
  return (

    <div className="d-flex justify-content-center align-items-center " >

        <div className='d-flex flex-column justify-content-center align-items-center formBody col-md-8 col-sm-11  col rounded-4'>

<div className='bg-black rounded-pill  w-auto mt-3'>
<button className={`rounded-pill border-0 fs-8 m-0 ${(tab==1)?"selected ": "notSelected"} `} onClick={()=>setTabActive(1)}>FAN SIGNUP</button> 
<button className={`rounded-pill border-0 fs-8  ${(tab==2)?"selected ": "notSelected"} `} onClick={()=>setTabActive(2)}>TALENT SIGNUP</button> 
</div>
<h4 className='text-light mt-3 fw-light'>Create Your Fan Account</h4>

{(tab==1) && <FanSignUp/>}
{(tab==2) && <TalentSignUp/>}
        </div>
    </div>
  )
}
export default  Body








