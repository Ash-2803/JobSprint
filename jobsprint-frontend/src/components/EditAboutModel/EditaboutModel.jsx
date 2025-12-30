import React from 'react'

const EditaboutModel = () => {
  return (
    <div className='my-8'>
        <div className='w-full mb-4'>
            <label>About*</label>
            <br />
           <textarea cols={10} rows={3} className='p-2 mt-1 w-full border rounded-md' ></textarea>
        </div>
         <div className='w-full mb-4'>
            <label>Skill*(Add by Seperating Comma , )</label>
            <br />
           <textarea cols={10} rows={3} className='p-2 mt-1 w-full border rounded-md' ></textarea>
        </div>
         <div className='w-full mb-4'>
            <label htmlFor="resumeUpload" className='p-2 bg-orange-800 text-white rounded-lg cursor-pointer'>Upload Resume</label>
            <input type="file" className='hidden' id = "resumeUpload" />
            <div className='my-2'>Resume Upload</div>
            <div>
                <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl'>Save</div>
            </div>
         </div>
      
    </div>
  )
}

export default EditaboutModel
