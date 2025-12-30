import React from 'react'
import Card from '../Card/Card'
import MyImage from "../../assets/My_image.jpeg";
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const Post = ({profile}) => {
    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false);

    const desc = `Hello How are you all! 👋`
    const handleSendcomment = (e) => {
        e.preventDefault();
        // Logic to send comment
    }
    return (
        <Card padding={0}>
            <div className='flex flex-col gap-3 p-4 '>
                <div className='w-12 h-12 rounded-4xl'>
                    <img className='rounded-4xl cursor-pointer w-12 h-12 border-white border-2' src={MyImage} alt="My Image" />
                </div>
                <div>
                    <div className='text-lg font-semibold'>Ash</div>
                    <div className='text-sm text-gray-500'>Software Engineer | New Delhi, India</div>
                </div>
            </div>
            <div className='text-md p-4 my-3 whitespace-pre-line grow'>
                {seeMore ? desc : `${desc.slice(0, 5)}`}<span onClick={() => setSeeMore(!seeMore)} className='text-orange-600 cursor-pointer'>
                    {seeMore ? ' Show Less' : '... See More'}
                </span>
            </div>
            <div className='w-full h-full'>
                <img src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" className='w-full h-auto' alt="Post Image" />
            </div>
            <div className='my-2 p-4 flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <ThumbUpSharpIcon className='text-orange-600' />
                    <div>Likes 120</div>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='text-gray-500 text-sm'>30 Comments</div>
                </div>
            </div>
            {
                !profile  && <div className='flex p-1'>
                <div className=' border-r border-gray-100 w-1/3 justify-center flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100'><ThumbUpSharpIcon className="text-orange-300" />
                    <span className='text-sm'>Likes</span>
                </div>
                <div onClick={() => setComment(!comment)} className=' border-r border-gray-100 w-1/3 justify-center flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100'><CommentOutlinedIcon className="text-black" />
                    <span className='text-sm'>Comments</span>
                </div>
                <div className=' border-r border-gray-100 w-1/3 justify-center flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100'><SendIcon className="text-black" />
                    <span className='text-sm'>Share</span>
                </div>
            </div>
            }
            {/* Comment section */}
            {
                comment && <div className='p-4 w-full'>
                    <div className='flex gap-2 items-center'>
                        <img src={MyImage} alt="My Image" className='rounded-4xl w-10 h-10 border-2 border-white cursor-pointer' />
                        <form className='w-full flex gap-2' onSubmit={handleSendcomment}>
                            <input type="text" placeholder='Add a comment...' className='w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' />
                            <button type="submit" className="bg-orange-400 text-white rounded-full px-4 py-2 hover:bg-orange-500">Comment</button>
                        </form>
                    </div>
                    {/* Other comment section logic can go here */}
                    <div className='w-full p-4'>
                        <div className='my-4'>
                            <div className='flex gap-2 items-center cursor-pointer'>
                                <img src={MyImage} alt="My Image" className='rounded-4xl w-10 h-10 border-2 border-white cursor-pointer' />
                                <div className='cursor-pointer'>
                                    <div className='text-md'>Ayush Tyagi</div>
                                    <div className='text-sm text-gray-500'>Software Engineer</div>
                                </div>
                            </div>
                            <div>
                                <div className='ml-12 mt-2'>Great post! Thanks for sharing.</div>
                            </div>
                        </div>

                    </div>
                </div>
            }


        </Card>
    )
}

export default Post
