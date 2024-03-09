import React from 'react'
import FloatingButton from '../Component/FloatingButton'
import '../Styles/LandingPage.css'
import CalorieCount from '../Component/CalorieCount'


const LandingPage = () => {

  return (
    <>

      <div className='calorie-box-container'>
        <div className='physical-calorie-box'>
          <CalorieCount className='calorie-circle'></CalorieCount>
        </div>
        <div className='eaten-calorie-box'>
          <CalorieCount className='calorie-circle'></CalorieCount>
        </div>
      </div>
      <FloatingButton className='floating-button'></FloatingButton>
    </>
  )
}

export default LandingPage;