import React from 'react'
import '../Styles/SearchPage.css'

const SearchPage = () => {
  return (
    <>
      <div className='input-container'>
        <input type="text" className="form-control" placeholder="Search for food" />
      </div>
    </>
  )
}

export default SearchPage