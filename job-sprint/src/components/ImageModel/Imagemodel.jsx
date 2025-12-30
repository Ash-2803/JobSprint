import React from 'react'
import MyImage from "../../assets/My_image.jpeg";

const Imagemodel = ({isCircular}) => {
  return (
    <div className='p-5 relative flex items-center flex-col h-full'>
      {
        isCircular ? (
           <img className = "rounded-full w-37.5 h-37.5" src={MyImage} alt="Image" />
        ):(
            
            <img className = "rounded-xl w-full h-50 object-cover" src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" alt="LandScape Image" />
        )
      }
      <label htmlFor="btn-submit" className='absolute bottom-10 left-0 bg-orange-900 text-white rounded-full p-3 cursor-pointer'>Upload</label>
      <input type="file" className="hidden" id="btn-submit" />
      <div className='absolute bottom-10 right-0 bg-orange-900 text-white rounded-full p-3 cursor-pointer'>Submit</div>
    </div>
  )
}

export default Imagemodel
