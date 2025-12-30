import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Model = (props) => {
  return (
    <div className='bg-black/50 fixed top-0 left-0 inset-0 flex items-center justify-center z-20'>
      <div className='w-[95%] md:w-[50%] h-125 bg-white rounded-xl p-10'>

        <div className='flex justify-between'>
          <div className='flex gap-4 items-center'>

            <div className='text-2xl font-bold'>{props.title}</div>
          </div>
          <div onClick={()=>props.closeModel()} className='cursor-pointer'><CloseOutlinedIcon /></div>
        </div>
        {props.children}
      </div>
      
    </div>
  )
}

export default Model
