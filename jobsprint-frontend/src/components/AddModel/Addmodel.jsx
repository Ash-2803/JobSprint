import React, { useState } from 'react'
import MyImage from "../../assets/My_image.jpeg";
import ImageIcon from '@mui/icons-material/Image';
import { ToastContainer, toast } from 'react-toastify';

const Addmodel = (props) => {

    const [imageUrl, setimageUrl] = useState(null);
    const [desc, setDesc] = useState("");

    const handlePost = async () => {
        if (desc.trim().length === 0 & !imageUrl) return toast.error("Please enter any fiend")

    }

    return (
        <div className=''>
            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <img src={props.personalData.profilePic} alt="My Image" className='rounded-full w-15 h-15 border-2 cursor-pointer' />
                </div>
                <div className='text-2xl'>{props.personalData.userName}</div>
            </div>
            <div>
                <textarea value={desc} onChange={(e => { setDesc(e.target.value) })} placeholder="What do you want to talk about?" className='w-full h-40 border-none outline-none resize-none mt-5 text-lg'></textarea>
            </div>
            {
                imageUrl && <div className='flex justify-between items-center'>
                    <img src={MyImage} alt="My Image" className='w-15 h-15 rounded-xl' />

                </div>
            }
            <div className='flex justify-between'>
                <div className='cursor-pointer' htmlFor="inputfile">
                    <input type="file" id="inputfile" className='hidden' />
                    <label htmlFor="inputfile"><ImageIcon /></label>
                </div>
                <div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-full h-fit' onClick={handlePost}>Post</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Addmodel
