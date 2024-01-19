import React from 'react'
import Navbar from '../components/Navbar'

function AdvanceLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div> { children } </div>
    </div>
  )
}

export default AdvanceLayout

