import React from 'react'
import { useState } from 'react'
import ProfileCard from '../../components/Profile Card/ProfileCard';

const Mynetwork = () => {
    const [text, setText] = useState("");

    const handleFriends = async () => {
        setText("Catch Up with Friend");
    }
    const handlePendingRequests = async () => {
        setText("Pending Requests");
    }
    return (
        <div className='px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-100'>
            <div className='py-4 px-10 border border-gray-400 w-full flex justify-between my-5 text-xl bg-white rounded-xl'>
                <div>{text}</div>
                <div className='flex gap-3'>
                    <button onClick={handleFriends} className={`border-gray-500 border cursor-pointer px-4 py-2 rounded-full h-fit ${text === "Catch Up with Friend" ? "bg-orange-500 text-white" : ""}`}>Friends</button>
                    <button onClick={handlePendingRequests} className={`border-gray-500 border px-4 py-2 rounded-full cursor-pointer h-fit ${text === "Pending Requests" ? "bg-orange-500 text-white" : ""} `}>Pending Request</button>
                </div>

            </div>
            <div className='flex w-full h-[80vh] gap-7 flex-wrap items-start justify-center'>
                <div className='md:w-[23%] h-67.5 sm:w-full'>
                    <ProfileCard />
                </div>
                <div className='md:w-[23%] h-67.5 sm:w-full'>
                    <ProfileCard />
                </div>
                <div className='md:w-[23%] h-67.5 sm:w-full'>
                    <ProfileCard />
                </div>
                <div className='md:w-[23%] h-67.5 sm:w-full'>
                    <ProfileCard />
                </div>

            </div>

        </div>
    )
}

export default Mynetwork
