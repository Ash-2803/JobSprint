import React from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'
import { useState, useEffect } from 'react'

const Resume = () => {

    const [userData, setuserData] = useState(null)

    useEffect(() => {
        let userData = localStorage.getItem('userInfo')
        setuserData(userData ? JSON.parse(userData) : null)

    }, [])
    return (
        <div className='px-4 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
            <div className='w-full py-5 sm:w-[74%]'>
                <img src={userData?.resume}alt="Resume Example" className='w-full h-full rounded-lg shadow-md' />
            </div>
            <div className='w-[26%] py-5 hidden md:block'>
                <div className='sticky top-19'>
                    <Advertisement />
                </div>
            </div>
        </div>
    )
}

export default Resume
