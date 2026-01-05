import React from 'react'
import { useState } from 'react';

const EditinfoModel = ({selfData,handleEditFunc}) => {

    const [data,setData] = useState({userName : selfData.userName,headline:selfData.headline,curr_company : selfData.curr_company, curr_location : selfData.curr_location, });

    const onChnageHandle = (event,key)=>{
        setData({...data,[key]: event.target.value})
    }

    const handleSaveButton = async()=>{
        let newData = {...selfData,...data}; // passing same user Schema
        handleEditFunc(newData)
    }
    return (
        <div className='mt-8 w-full h-87.5 overflow-auto'>
            <div className='w-full mb-4'>
                <label> Full Name*</label>
                <br />
                <input value={data.userName} onChange={(e)=>{onChnageHandle(e,'userName')}} type="text" placeholder="Enter your name" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Headline*</label>
                <br />
                <textarea value={data.headline} onChange={(e)=>{onChnageHandle(e,'headline')}} cols={10} rows={3} className='p-2 mt-1 w-full border rounded-md' ></textarea>
            </div>
            <div className='w-full mb-4'>
                <label>Current Company*</label>
                <br />
                <input value={data.curr_company} onChange={(e)=>{onChnageHandle(e,'curr_company')}} type="text" placeholder="Enter Current Company" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Current Location*</label>
                <br />
                <input value={data.curr_location} onChange={(e)=>{onChnageHandle(e,'curr_location')}} type="text" placeholder="Enter Current Location" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl' onClick={handleSaveButton}>Save</div>

        </div>
    )
}

export default EditinfoModel
