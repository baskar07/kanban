import React from 'react';
import { FaTrello } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='w-1/5 mx-4'>
       <ul className='flex flex-col gap-y-4 w-full mx-4'>
        <li>
            <NavLink to='/' className={({isActive})=> (isActive ? "flex items-center gap-1 bg-[#e8f3ff] text-[#3883e8] px-4 py-1.5 rounded-md" : "flex items-center gap-1 px-4 py-1.5 rounded-md text-slate-500 hover:bg-slate-200")}>
                <TbActivityHeartbeat  className='text-lg'/>
                <span className='text-sm font-medium'>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to='/boards' className={({isActive})=> (isActive ? "flex items-center gap-1 bg-[#e8f3ff] text-[#3883e8] px-4 py-1.5 rounded-md" : "flex items-center gap-1 px-4 py-1.5 rounded-md text-slate-500 hover:bg-slate-200")}>
                <FaTrello  className='text-lg'/>
                <span className='text-sm font-medium'>Boards</span>
            </NavLink>
        </li>
        <li>
            <NavLink to='/settings' className={({isActive})=> (isActive ? "flex items-center gap-1 bg-[#e8f3ff] text-[#3883e8] px-4 py-1.5 rounded-md" : "flex items-center gap-1 px-4 py-1.5 rounded-md text-slate-500 hover:bg-slate-200")}>
                <MdOutlineSettings  className='text-lg'/>
                <span className='text-sm font-medium'>Settings</span>
            </NavLink>
        </li>
       </ul>
    </div>
  )
}

export default Sidebar