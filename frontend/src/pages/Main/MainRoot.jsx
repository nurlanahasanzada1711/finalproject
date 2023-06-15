import React from 'react'
import Navbar from "../../components/Main/Navbar/Navbar"
import Footer from  "../../components/Main/Footer/Footer"
import { Outlet } from 'react-router-dom'


const MainRoot = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default MainRoot