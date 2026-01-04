import React from 'react'
import Card from '../Card/Card'
import MyImage from "../../assets/My_image.jpeg";
import { useEffect, useState } from 'react'
const Advertisement = () => {

    const [ userData,setuserData] = useState(null)

    useEffect (()=>{
        let userData = localStorage.getItem('userInfo')
        setuserData(userData ? JSON.parse(userData) : null)

    },[]) // [] - this is dependency
    return (
        <div className='sticky top-20 w-full'>
            <Card padding={0}>
                <div className='relative h-25'>
                    <div className=' relative w-full h-22 rounded-md'>
                        <img src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" className='rounded-t-md h-full w-full' alt="LandScape Image" />
                    </div>
                    <div className='absolute top-15 left-[40%] z-10'>
                        <img src={userData?.profilePic} className="rounded-full border-2 h-14 w-14 border-white cursor-pointer object-cover" alt="My Image" />
                    </div>
                </div>
                <div className='px-10 py-5'>
            <div className='text-sm font-semibold my-1 text-center'>{userData?.userName}</div>
            <div className='text-sm my-1 text-center'>Reach millions of professionals</div>
            <div className='text-sm my-1 text-center'>Contact us at
                <a href='mailto:job-sprint@example.com' className='text-orange-500'> job-sprint@example.com</a>
            </div>
                </div>
            </Card>
        </div>
    )
}

export default Advertisement
