import React from 'react'
import Body from '../Components/Body'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import SearchBar from '../Components/SearchBar/SearchBar'
import './SignUpPage.css'

function SignUpPage() {
  return (
    <div className='bg-black SignUpPage_h '>
<NavBar/>
<SearchBar/>
<Body/>
<Footer/>
</div>
  )
}

export default SignUpPage