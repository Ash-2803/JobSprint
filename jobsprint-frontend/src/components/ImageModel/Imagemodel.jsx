import React from 'react'
import MyImage from "../../assets/My_image.jpeg";
import { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Imagemodel = ({ isCircular, selfData ,handleEditFunc }) => {

  const [imageLink, setImageLink] = useState(isCircular ? selfData?.profilePic : selfData?.coverPic)

  const [loading, setLoading] = useState(false);

  const handleInputImage = async (e) => {
    const files = e.target.files
    const data = new FormData();
    data.append('file', files[0])

    data.append('upload_preset', 'jobsprint')
    setLoading(true)
    try {

      const response = await axios.post('https://api.cloudinary.com/v1_1/dy3xjpdri/image/upload', data)
      const imageUrl = response.data.url;
      setImageLink(imageUrl);

    } catch (err) {
      console.log(err)

    } finally {
      setLoading(false)
    }
  }

  const handleSubmitButton = async()=>{
    let {data} = {...selfData}
    if(isCircular){
      data = {...data,['profilePic'] : imageLink}
    }else{
      data = {...data,['coverPic'] : imageLink}
    }
    handleEditFunc(data)
  }
  return (
    <div className='p-5 relative flex items-center flex-col h-full'>
      {
        isCircular ? (
          <img className="rounded-full w-37.5 h-37.5" src={imageLink} alt="Image" />
        ) : (

          <img className="rounded-xl w-full h-50 object-cover" src={imageLink} alt="LandScape Image" />
        )
      }
      <label htmlFor="btn-submit" className='absolute bottom-10 left-0 bg-orange-900 text-white rounded-full p-3 cursor-pointer'>Upload</label>
      <input onChange={handleInputImage} type="file" className="hidden" id="btn-submit" />
      {
        loading ? <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box> : <div className='absolute bottom-10 right-0 bg-orange-900 text-white rounded-full p-3 cursor-pointer' onClick={handleSubmitButton}>Submit</div>
      }
      

    </div>
  )
}

export default Imagemodel
