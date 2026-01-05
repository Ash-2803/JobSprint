import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const EditaboutModel = ({ selfData, handleEditFunc }) => {

   const [data, setData] = useState({ about: selfData?.about, skillInput: selfData?.skills?.join(','), resume: selfData?.resume })

   const [loading, setLoading] = useState(false);

   const onChnageHandle = (event, key) => {
      setData({ ...data, [key]: event.target.value })
   }

   

   const handleInputImage = async (e) => {
      const files = e.target.files
      const data = new FormData();
      data.append('file', files[0])

      data.append('upload_preset', 'jobsprint')
      setLoading(true)
      try {

      const response = await axios.post('https://api.cloudinary.com/v1_1/dy3xjpdri/image/upload', data)
      const imageUrl = response.data.url;
      setData({...data,resume:imageUrl});

    } catch (err) {
      console.log(err)

    } finally {
      setLoading(false)
    }
   }

   const handleOnSave = async()=>{
      let arr = data?.skillInput.split(',');
      let newData = {...selfData,about: data.about, skills : arr,resume : data.resume}
      handleEditFunc(newData)
   }
      return (
         <div className='my-8'>
            <div className='w-full mb-4'>
               <label>About*</label>
               <br />
               <textarea value={data.about} onChange={(e) => { onChnageHandle(e, 'about') }} cols={10} rows={3} className='p-2 mt-1 w-full border rounded-md' ></textarea>
            </div>
            <div className='w-full mb-4'>
               <label>Skills*(Add by Seperating Comma , )</label>
               <br />
               <textarea value={data.skillInput} onChange={(e) => { onChnageHandle(e, 'skillInput') }} cols={10} rows={3} className='p-2 mt-1 w-full border rounded-md' ></textarea>
            </div>
            <div className='w-full mb-4'>
               <label htmlFor="resumeUpload" className='p-2 bg-orange-800 text-white rounded-lg cursor-pointer'>Upload Resume</label>
               <input onChange={handleInputImage} type="file" className='hidden' id="resumeUpload" />
               {
                  data.resume && <div className='my-2'>{data.resume}</div>
               }
               <div>
                  <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl mt-4' onClick={handleOnSave}>Save</div>
               </div>
            </div>

         </div>
      )
   }

   export default EditaboutModel
