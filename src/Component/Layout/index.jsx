import React from 'react'
import Header from '../Shared/Header'
import { Outlet } from 'react-router-dom'
import SideNav from '../Shared/SideNav'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <SideNav/>
    </div>
  )
}

export default Layout