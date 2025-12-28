import React from 'react'
import {Link} from 'react-router-dom'


const Navbar1 = () => {
    return (
        <nav className='w-full bg-gray-100 md:px-25 px-5 flex justify-between py-4 box-border '>
            <Link to = {"/"} className='flex justify-between'>
                <div className='flex gap-4 items-center cursor-pointer'>
                    <h1 className="text-orange-400 font-bold text-4xl">JobSprint</h1>
                    <img src={"https://images-platform.99static.com//x43DEvYF24dPa-bBzpxj5NL93ZY=/199x174:1839x1814/fit-in/500x500/99designs-contests-attachments/77/77692/attachment_77692903"} alt="Job Sprint logo" className='w-10 h-10' />
                </div>
            </Link>
            <div className=' flex box-border md: gap-4 justify-center items-center'>
                <Link to = {"/signup"} className='md: px-4 md: py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer'>Join now</Link>
                <Link to = {"/signin"} className='md: px-4 md: py-2 box-border border text-white bg-orange-400 rounded-3xl text-xl hover:bg-orange-500 cursor-pointer'>
                    Sign In
                </Link>

            </div>
        </nav>
    )
}

export default Navbar1