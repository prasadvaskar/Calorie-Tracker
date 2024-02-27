import React from 'react'
import Navbar from '../Component/Navbar'
import '../Styles/SearchPage.css'

const SearchPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='input-container'> 
        <input type="text" className="form-control"  placeholder="Search for food"/>
     </div>       
</>
  )
}

export default SearchPage