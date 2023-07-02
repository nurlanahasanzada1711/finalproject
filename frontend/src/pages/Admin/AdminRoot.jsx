import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar'

const AdminRoot = () => {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    </>
  )
}

export default AdminRoot