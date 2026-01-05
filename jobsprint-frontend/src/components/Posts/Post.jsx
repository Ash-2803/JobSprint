import React from 'react'
import Card from '../Card/Card'
import MyImage from "../../assets/My_image.jpeg";
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Post = ({ profile, item, personalData }) => {
    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false);

    const [liked, setLiked] = useState(false);
    const [noofLikes, setnoofLikes] = useState(item?.likes.length)

    const [comments, setComments] = useState([])

    const [commentText, setCommentText] = useState("");

    const desc = item?.desc
    const handleSendcomment = async (e) => {

        e.preventDefault();
        if (commentText.trim().length === 0) return toast.error("Please enter comment")
        await axios.post(`http://localhost:3000/api/comments`, {postId : item?._id ,comment : commentText }, { withCredentials: true }).then(res => {
            setComments([res.data.comment,...comments])
        }).catch(err => {
            console.log(err)
        })
        // Logic to send comment
    }

    useEffect(() => {
        let selfId = personalData?._id
        item?.likes?.map((item) => {
            if (item.toString() === selfId.toString()) {
                setLiked(true)
                return
            } else {
                setLiked(false)
            }
        })

    }, [])
    const handleLike = async () => {
        await axios.post('http://localhost:3000/api/post/likeDislike', { postId: item?._id }, { withCredentials: true }).then(res => {
            if (liked) {
                setnoofLikes((prev) => prev - 1)
                setLiked(false)
            } else {
                setLiked(true)
                setnoofLikes((prev) => prev + 1)
            }


        }).catch(err => {
            console.log(err)
        })
    }

    const handleComment = async () => {
        setComment(true)
        await axios.get(`http://localhost:3000/api/comments/${item?._id}`).then(res => {
            console.log(res)
            setComments(res.data.comments)
        }).catch(err => {
            console.log(err)
        })

    }

    //     console.log("LOGGED IN USER:", personalData.userName);
    // console.log("POST OWNER:", item.user.userName);



    return (
        <Card padding={0}>
            <div className='flex flex-col gap-3 p-4 '>
                <div className='w-12 h-12 rounded-4xl'>
                    <img className='rounded-4xl cursor-pointer w-12 h-12 border-white border-2' src={item?.user?.profilePic} alt="My Image" />
                </div>
                <div>
                    <div className='text-lg font-semibold'>{item?.user?.userName}</div>
                    <div className='text-sm text-gray-500'>{item?.user?.headline}</div>
                </div>
            </div>
            {
                desc?.length > 0 && <div className='text-md p-4 my-3 whitespace-pre-line grow'>
                    {seeMore ? desc : desc.length>50? `${desc.slice(0, 50)}...`:`${desc}`} {desc?.length < 50 ? null : <span onClick={() => setSeeMore(!seeMore)} className='text-orange-600 cursor-pointer'>
                        {seeMore ? ' Show Less' : '... See More'}
                    </span>}
                </div>
            }
            {
                item?.image_link && <div className='w-full h-full'>
                    <img src={item?.image_link} className='w-full h-auto' alt="Post Image" />
                </div>
            }
            <div className='my-2 p-4 flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <ThumbUpSharpIcon className='text-orange-600' />
                    <div>{noofLikes}Likes</div>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='text-gray-500 text-sm'>{item?.comments} Comments</div>
                </div>
            </div>
            {
                !profile && <div className='flex p-1'>
                    <div onClick={handleLike} className=' border-r border-gray-100 w-1/3 justify-center flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100'>{liked ? <ThumbUpSharpIcon className="text-orange-300" /> : <ThumbUpOutlinedIcon />}
                        <span className='text-sm'>{liked ? 'Liked' : "Like"}</span>
                    </div>
                    <div onClick={handleComment} className=' border-r border-gray-100 w-1/3 justify-center flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100'><CommentOutlinedIcon className="text-black" />
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
                            <input value={commentText} onChange={(event) => setCommentText(event.target.value)} type="text" placeholder='Add a comment...' className='w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' />
                            <button type="submit" className="bg-orange-400 text-white rounded-full px-4 py-2 hover:bg-orange-500">Comment</button>
                        </form>
                    </div>
                    {/* Other comment section logic can go here */}
                    <div className='w-full p-4'>
                        {
                            comments.map((item, index) => {
                                return (<div className='my-4'>
                                    <div className='flex gap-2 items-center cursor-pointer'>
                                        <img src={item?.user?.profilePic} alt="My Image" className='rounded-4xl w-10 h-10 border-2 border-white cursor-pointer' />
                                        <div className='cursor-pointer'>
                                            <div className='text-md'>{item?.user?.userName}</div>
                                            <div className='text-sm text-gray-500'>Software Engineer</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='ml-12 mt-2'>{item?.comment}</div>
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                    <ToastContainer />
                </div>
            }


        </Card>
    )
}

export default Post