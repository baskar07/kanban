import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <React.Fragment>
        <main className='mt-10 flex max-w-7xl mx-auto'>
            <Sidebar />
            <Outlet />
        </main>
    </React.Fragment>
  )
}

export default Main