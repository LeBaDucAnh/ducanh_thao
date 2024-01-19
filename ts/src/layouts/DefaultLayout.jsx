import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="site__body">
                
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout

