import React from 'react'
import Navbar from '../components/Navbar'

function CustomLayout({ children }) {
  return (
    <div>
      <div> { children } </div>
    </div>
  )
}

export default CustomLayout

