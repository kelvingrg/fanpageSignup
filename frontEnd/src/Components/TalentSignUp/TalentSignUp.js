



import React, { useState } from 'react'
import './TalentSignUp.css' 
import axios from 'axios'
import Swal from "sweetalert2";

function TalentSignUp() {
  const [userData,setUserData]=useState({
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    timeZone:"",
    password:"",
    check:true
})


/// valdation functions 

const[fNameErr,setFNameErr]=useState(false)
const[lNameErr,setLNameErr]=useState(false)
const[userNameErr,setUserNameErr]=useState(false)
const[emailErr ,setEmailErr]=useState(false)
const[passErr, setPassErr]=useState(false) 


const handleSubmit = (e) => {
e.preventDefault();
vallidateFirstName()
vallidateLastName() 
vallidateUserName() 
vallidateEmail()
validatePassword()
    if (vallidateFirstName() && vallidateLastName() && vallidateUserName() && vallidateEmail() && validatePassword) {
      try{
        Swal.fire({
          title: 'sign up done successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/talentSignup`, userData).then((response)=>{
        Swal.fire({
          title: 'sign up done successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
       })
       .catch((err)=>{
        Swal.fire({
          title: 'sign up failed',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

       })
      }
       catch(err){
        Swal.fire({
          title: 'sign up failed',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
       }
       
    } 
}


// valiadtion functions start

const vallidateFirstName = (e) => {
    // e.preventDefault();
    var regx = /^[a-zA-Z ]+$/;
    if (regx.test(userData.firstName)) 
   { setFNameErr(false)
        return(true)
      }
     else 
    { setFNameErr(true)
        return false}
}
const vallidateLastName = (e) => {
  var regx = /^[a-zA-Z ]+$/;
  if (regx.test(userData.lastName)) 
 { setLNameErr(false)
      return(true)}
   else 
  { setLNameErr(true)

      return false}
}

const vallidateUserName = (e) => {
var regx = /^[a-zA-Z ]+$/;
if (regx.test(userData.userName)) 
{ setUserNameErr(false)
    return(true)}
 else 
{ setUserNameErr(true)
    return false}
}


const vallidateEmail = (e) => {
  
    setEmailErr(false)
    var regx = /^([a-zA-Z0-9\.-_ ]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,20})(.[a-zA-Z]{2,5})$/;
    if (regx.test(userData.email)) 
   { setEmailErr(false)
        return true}
     else 
    { setEmailErr(true)
        return false
}
    

}
const validatePassword = (e) => {
    var regx = /^([0-9a-zA-Z\.<>,!@#$%&*]{6,20})+$/
    if (regx.test(userData.password)) {
   setPassErr(false)
   return true}

     else {
      setPassErr(true)
        return false
    }

}

const addData=(e)=>{
  setFNameErr(false)
  setLNameErr(false)
  setUserNameErr(false)
  setEmailErr(false)

  setUserData({...userData,[e.target.name]:e.target.value})

}
return (
<div className='  d-flex flex-column justify-content-center align-items-center  w-100 '>
<div className=' col-md-5 col-sm-7  col-lg-4 col-12 text-primary form d-flex flex-column '>    
   <label className='text-light '>First name*</label>
    <input
    className='border-1 rounded-pill formBody w-100 px-2 mb-2'
    placeholder='first name'
    name="firstName"
     type='text'
     required
     value={userData.firstName}
onChange={(e)=>{
addData(e)
vallidateFirstName()
}} 
     />
       { fNameErr && <label className='text-danger '>invalid name</label>}
   <label className='text-light '>Last name*</label>
   <input
    className='border-1 rounded-pill formBody w-100 px-2 mb-2'
    placeholder='Last name'
    name="lastName"
     type='text'
     required
     value={userData.lastName}
     onChange={(e)=>{
      addData(e)
      vallidateLastName()
    }} 
     />
     { lNameErr && <label className='text-danger '>name </label>}
          <label className='text-light '>Username*</label>
    <input
    className='border-1 rounded-pill formBody w-100 px-2 mb-2'
    placeholder='Username'
    name="userName"
     type='text'
     required
     value={userData.userName}
     onChange={(e)=>{
      addData(e)
      vallidateUserName()
    }} 
     />
       { userNameErr && <label className='text-danger '>invalid user name</label>}
   <label className='text-light '>Email*</label>
   <input
    className='border-1 rounded-pill formBody w-100 px-2 mb-2'
    placeholder='Email'
    name="email"
     type='email'
     required
     value={userData.email}
     onChange={(e)=>{
      addData(e)
      vallidateEmail()
    }} 
     />
       { emailErr && <label className='text-danger '>invalid email</label>}
          <label className='text-light '>Timezone *</label>
    <select
    className='border-1 rounded-pill  formBody w-100 px-2 mb-2'
    placeholder='select Timezone'
    name="timeZone"
     type='text'
     required
     value={userData.timeZone}
     onSelect={(e)=>addData(e)} 
     >
            <option className='Timezone'  value="Time zone 1">Time zone 1 </option>
          <option className='Timezone'  value="Time zone 3 ">Time zone 3</option>
          <option className='Timezone' value="Time zone 4 ">Time zone 4</option>
          <option className='Timezone' value="Time zone 5">Time zone 5</option>
          <option className='Timezone' value="Time zone 6">Time zone 2</option>
     </select>
   <label className='text-light '>Password *</label>
   <input
    className='border-1 rounded-pill formBody w-100 px-2 mb-2'
    placeholder='first name'
    name="password"
     type='text'
     required
     value={userData.password}
     onChange={(e)=>{
      addData(e)
      validatePassword()
    }} 
     />
  { passErr && <label className='text-danger '>password shoul contain min of 6 charaters includig special charaters , numbers , alphabets </label>}
<span className='d-flex justify-content-center align-items-center'>
<span>
<input
 type="checkbox" 
  className='d-inline neon bg-neon mr-2'
  onChange={(e)=>{setUserData({...userData,check:e.target.checked})

}} 
  value={userData.check}
  name='check'
   />
   </span>
<span>
<p className='d-inline m-2 text-light' >I agree the </p>
<a className=' d-inline neon ' >Terms and conditions</a></span>
</span>
<button className='rounded-pill  bg-neon text-black w-50 align-self-center my-3' onClick={handleSubmit}>SIGN UP</button>
<span className='d-flex justify-content-center align-items-center'><p className='text-light'>already have an account? </p> <p className='neon'> Log in</p></span>
</div>
</div>
)
}

export default TalentSignUp