import React from 'react'
import homeImage from '../../assets/home-image.svg';
import { GoClock } from "react-icons/go";
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Home = () => {
  return (
    <div className="w-4/5 flex  gap-x-4  max-w-3xl mx-auto">
       
        <div className="max-w-sm overflow-hidden shadow-lg rounded-md">
            <img className="w-full" src={homeImage}  alt="" />
            <div className="my-4">
                <h3 className='mb-2 text-center font-bold '>Stay on track and up to date</h3>
                <p className='text-sm font-normal text-balance text-center'>Invite people to boards and cards, leave comments, add due dates, and we'll show the most important activity here.</p>
            </div>
        </div>

        <div className="w-[20rem] mx-4 p-4  ">

            <div className="flex items-center gap-x-1 text-slate-500">
                <GoClock className='text-base' />
                <h3 className='text-sm font-medium'>Recently Viewed</h3>    
            </div>

            <div className="flex flex-col mt-4 w-full">

                <Link className='group/item w-full flex items-center justify-between hover:bg-slate-200 hover:text-slate-600  px-4 py-2 rounded-md'>
                    <span className='text-sm font-semibold'>Todo App</span>
                    <a href="" className='group/edit invisible hover:bg-slate-200 group-hover/item:visible hover:outline-yellow-500'>
                    <span class="group-hover/edit:text-gray-700 text-end "><CiStar className='text-lg hover:outline-4 hover:text-yellow-600 hover:font-extrabold  hover:scale-125 ' /></span>
                    </a>
                </Link>

            </div>

        </div>

        
       
    </div>
  )
}

export default Home