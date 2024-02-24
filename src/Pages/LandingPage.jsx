import React from 'react'
import Navbar from '../Component/Navbar'
import '../Styles/LandingPage.css'

const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <div className='calorie-box-container'>
        <div className='physical-calorie-box'></div>
        <div className='eaten-calorie-box'></div>
      </div>
    </>
  )
}

export default LandingPage;