import React from 'react'

const EditExperienceModel = () => {
    return (
        <div className='mt-8 w-full h-87.5 overflow-auto'>
            <div className='w-full mb-4'>
                <label>Role*</label>
                <br />
                <input type="text" placeholder="Enter your name" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Company*</label>
                <br />
                <input type="text" placeholder="Enter your name" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Duration*</label>
                <br />
                <input type="text" placeholder="Enter your name" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div className='w-full mb-4'>
                <label>Place*</label>
                <br />
                <input type="text" placeholder="Enter your name" className='p-2 mt-1 w-full border rounded-md' />
            </div>
            <div>
                <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl'>Save</div>
            </div>
        </div>

    )
}

export default EditExperienceModel
