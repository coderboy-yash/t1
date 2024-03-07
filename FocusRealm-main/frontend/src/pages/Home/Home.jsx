import './App.css'
import Clock from './components/Clock'
import Navbar from './components/Navbar'
import QuoteCarousel from './components/Quotes'
import RightBar from './components/Rightbar'
import React from 'react'

function Home() {

  return (
    <div className=" text-white font-poppins bg-gray-100 w-[100vw] overflow-x-clip h-[200vh] min-h-[100vh]">
      <Navbar />
      <RightBar />
      <div className="flex items-center justify-center">
        <QuoteCarousel />
      </div>
      <div className="flex justify-center items-center h-[100vh]">
        <Clock />
      </div>
      
    </div>

  )
}

export default Home
