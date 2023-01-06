import React from 'react'
import './SearchBar.css'
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className='container-fluid col-md-8 col-sm-11  col-lg-8 col-12  mb-2'>
<div className='row '>
<div className='d-flex gap-4'>
    <p className='text-light'>Search New Talent</p>

    <div className="col-md-4  inputBox d-flex align-items-center   rounded-pill " >
    <input type="text" class="w-100 inputSuccess2 bg-transparent p-2 m-0 h-100"/>
    <span className="p-2"><BsSearch size={17} color={"#39FF14"}/></span>
    </div>
</div>
</div>

    </div>
  )
}

export default SearchBar