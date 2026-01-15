import React from 'react'
import { useState, useEffect } from 'react';

const Conversation = ({ item, key, ownData, handleSelctedConv, activeConvId }) => {

    const [memberData, setMemberData] = useState(null)

    useEffect(() => {
        let ownId = ownData?._id;
        let arr = item?.members?.filter(
            (it) => String(it._id) !== String(ownId)
        );
        setMemberData(arr[0])
    }, [])

    const handleClickFunc = async () => {
        handleSelctedConv(item?._id, memberData)

    }
    return (
        <div onClick={handleClickFunc} key={key} className={`flex items-center w-full cursor-pointer border-b border-gray-300 gap-3 p-4 hover:bg-gray-200 ${activeConvId === item?._id ? "bg-gray-200" : null}`}>
            <div className='shrink-0 '>
                <img src={memberData?.profilePic} alt="Oggy" className='w-12 h-12 rounded-full cursor-pointer' />
            </div>
            <div>
                <div className='text-md'>{memberData?.userName}</div>
                <div className='text-sm text-gray-500'>{memberData?.headline}</div>
            </div>
        </div>
    )
}

export default Conversation
