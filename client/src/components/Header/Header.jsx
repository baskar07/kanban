import React, { useState } from 'react';
import { FaSearch, FaTrello, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import profile from '../../assets/placeholder.jpg';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const Header = () => {
    
  return (
   <header className='w-full sticky top-0 left-0 z-10 bg-white border-b border-gray-300'>
        <nav className='max-w-screen-2xl mx-auto py-2 flex items-center justify-between'>

            <Link className='flex justify-start items-center gap-1 text-gray-600'>
                <FaTrello className='text-2xl' />
                <h1 className='text-2xl font-bold'>Trello</h1>
            </Link>

            
                <div className=" flex items-center  gap-x-8    ">
                    <form className='flex px-2 w-full items-center justify-between rounded-md border-gray-400  border '>
                        <input type="text" className='w-full border-none outline-none px-2 py-0.5' placeholder='Search' />
                        <button className='flex items-center text-gray-500'><FaSearch /></button>
                    </form>


                    {/* menu item */}
                    <Menu as="div" className="relative">
                        <div>
                            <MenuButton className="h-8 w-8 flex items-center">
                                <img className='h-8 w-auto rounded-full object-contain ' src={profile} alt="" />
                            </MenuButton>
                        </div>
                        <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            <div className="py-1">
                            
                            <MenuItem>
                                <Link className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                    Account Settings
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to='/login' className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                    Login
                                </Link>
                            </MenuItem>
                            
                            
                                
                            </div>
                        </MenuItems>
                    </Menu>




                    {/* menu item */}
                </div>

                
                    
                
            
        </nav>
   </header>
  )
}

export default Header