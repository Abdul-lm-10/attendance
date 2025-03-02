import React from 'react'
import Header from '../Shared/Header'
import { Outlet } from 'react-router-dom'
import SideNav from '../Shared/SideNav'

const Layout = () => {
  return (
    <div className='h-screen flex flex-col'>
      {/* Header */}
      <div className='w-full'>
        <Header />
      </div>

      <div className='flex flex-grow'>
        {/* Side Nav */}
        <div className='w-2/12'>
          <SideNav />
        </div>

        {/* Outlet Content */}
        <div className='w-10/12 bg-gray-100 overflow-y-auto p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
