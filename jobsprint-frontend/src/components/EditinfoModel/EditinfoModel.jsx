import React from 'react'

const EditinfoModel = () => {
  return (
    <div className='mt-8 w-full h-87.5 overflow-auto'>
        <div className='w-full mb-4'>
            <label> Full Name*</label>
            <br />
            <input type="text" placeholder="Enter your name" className='p-2 mt-1 w-full border rounded-md'/>
        </div>
        <div className='w-full mb-4'>
            <label>Headline*</label>
            <br />
           <textarea cols={10} rows={3} className='p-2 mt-1 w-full border rounded-md' ></textarea>
        </div>
        <div className='w-full mb-4'>
            <label>Current Company*</label>
            <br />
            <input type="text" placeholder="Enter Current Company" className='p-2 mt-1 w-full border rounded-md'/>
        </div>
        <div className='w-full mb-4'>
            <label>Current Location*</label>
            <br />
            <input type="text" placeholder="Enter Current Location" className='p-2 mt-1 w-full border rounded-md'/>
        </div>
        <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl'>Save</div>
      
    </div>
  )
}

export default EditinfoModel
