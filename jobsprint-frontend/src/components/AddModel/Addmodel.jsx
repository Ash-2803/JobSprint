import React from 'react'
import MyImage from "../../assets/My_image.jpeg";
import ImageIcon from '@mui/icons-material/Image';

const Addmodel = () => {
    return (
        <div className=''>
            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <img src={MyImage} alt="My Image" className='rounded-full w-15 h-15 border-2 cursor-pointer' />
                </div>
                <div className='text-2xl'>Ayush Tyagi</div>
            </div>
            <div>
                <textarea placeholder="What do you want to talk about?" className='w-full h-40 border-none outline-none resize-none mt-5 text-lg'></textarea>
            </div>
            <div className='flex justify-between items-center'>
                <img src={MyImage} alt="My Image" className='w-15 h-15 rounded-xl' />
                
            </div>
            <div className='flex justify-between'>
                <div className='cursor-pointer' htmlFor="inputfile">
                    <input type="file" id="inputfile" className='hidden' />
                    <label htmlFor="inputfile"><ImageIcon /></label>
                </div>
                <div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-full h-fit'>Post</button>
                </div>

            </div>
        </div>
    )
}

export default Addmodel
