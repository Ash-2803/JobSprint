import React from 'react'
import { useState } from 'react';

const EditExperienceModel = ({ selfData, handleEditFunc, updateExp, setupdateExp }) => {

    const [data, setData] = useState({ designation: updateExp?.clicked ? updateExp?.data?.designation : "", company_name: updateExp?.clicked ? updateExp?.data?.company_name : "", duration: updateExp?.clicked ? updateExp?.data?.duration : "", location: updateExp?.clicked ? updateExp?.data?.location : "" })

    const onChnageHandle = (event, key) => {
        setData({ ...data, [key]: event.target.value })
    }

    const updateExpSave = () => {
        let newFilteredData = selfData?.experience.filter((item) => item._id !== updateExp?.data?._id)
        let newArr = [...newFilteredData, data];
        let newData = { ...selfData, experience: newArr }
        handleEditFunc(newData)
    }

    const handleOnSave = () => {
        if (updateExp?.clicked) return updateExpSave();
        let expArr = [...selfData?.experience, data]
        let newData = { ...selfData, experience: expArr }
        handleEditFunc(newData)

    }

    const handleOnDelete = () => {
        let newFilteredData = selfData?.experience.filter((item) => item._id !== updateExp?.data?._id)
        let newData = { ...selfData, experience: newFilteredData }
        handleEditFunc(newData)
    }
    return (
        <div className='mt-8 w-full h-87.5 overflow-auto'>
            <div className='w-full mb-4'>
                <label>Role*</label>
                <br />
                <input value={data.designation} onChange={(e) => onChnageHandle(e, 'designation')} type="text" placeholder="" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Company*</label>
                <br />
                <input value={data.company_name} onChange={(e) => onChnageHandle(e, 'company_name')} type="text" placeholder="" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Duration*</label>
                <br />
                <input value={data.duration} onChange={(e) => onChnageHandle(e, 'duration')} type="text" placeholder="" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Place*</label>
                <br />
                <input value={data.location} onChange={(e) => onChnageHandle(e, 'location')} type="text" placeholder="" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='flex justify-between'>
                <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl' onClick={handleOnSave}>Save</div>
                {
                    updateExp.clicked && <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl' onClick={handleOnDelete}>Delete</div>
                }
            </div>
        </div>

    )
}

export default EditExperienceModel
