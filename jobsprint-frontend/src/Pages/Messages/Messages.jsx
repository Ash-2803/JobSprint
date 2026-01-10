import Card from '../../components/Card/Card'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Conversation from '../../components/Conversation/Conversation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import Advertisement from '../../components/Advertisement/Advertisement';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {

    const [conversations, setConversations] = useState([]);

    const [ownData, setownData] = useState(null)

    const [activeConvId, setActiveConvId] = useState(null);

    const [selectedConvDetails, setSelectedConvDetails] = useState(null)

    const [messages, setMessages] = useState([])

    const [loading, setLoading] = useState(false)

    const [imageLink, setImageLink] = useState(null)

    const [messageText, setMessageText] = useState("")

    const handleSelctedConv = (id, userData) => {
        setActiveConvId(id)
        setSelectedConvDetails(userData)
    }


    useEffect(() => {
        fetchConversationOnLoad()
        let userData = localStorage.getItem('userInfo')
        setownData(userData ? JSON.parse(userData) : null)
    }, [])

    useEffect(() => {
        if (activeConvId) {
            fetchMessages();
        }

    }, [activeConvId])

    const fetchMessages = async () => {
        await axios.get(`http://localhost:3000/api/message/${activeConvId}`, { withCredentials: true }).then(res => {
            // console.log(res)
            setMessages(res.data.message)

        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
        })
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
            setImageLink(imageUrl);

        } catch (err) {
            console.log(err)

        } finally {
            setLoading(false)
        }
    }

    const fetchConversationOnLoad = async () => {
        await axios.get('http://localhost:3000/api/conversation/get-conversation', { withCredentials: true }).then(res => {
            console.log(res.data.conversations)
            setConversations(res.data.conversations)
            setActiveConvId(res.data?.conversations[0]?._id)
            let ownId = ownData?._id;
            let arr = res.data?.conversations[0]?.members?.filter((it) => it._id !== ownId)
            setSelectedConvDetails(arr)

        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
        })
    }

    const handleSendMessage = async () => {
        await axios.post(`http://localhost:3000/api/message`,{conversation:activeConvId , message : messageText, picture : imageLink}, { withCredentials: true }).then(res =>{
            console.log(res)
        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
        })
    }

    // console.log(selectedConvDetails)
    return (
        <div className='px-4 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
            <div className='w-full flex justify-between pt-5'>
                {/* left side */}
                <div className='w-full md:w-[70%]'>
                    <Card padding={0} >
                        <div className='border-b border-gray-300 px-5 py-2  font-semibold text-lg'>
                            Messages
                        </div>
                        <div className='border-b border-gray-300 px-5 py-2'>
                            {/* message list  */}
                            <div className='py-1 px-3 cursor-pointer hover:bg-green-700 bg-green-800 font-semibold flex  gap-2 w-fit rounded-2xl text-white'>
                                Focused <ArrowDropDownIcon />
                            </div>

                        </div>
                        {/* div for chat */}
                        <div className='w-full md:flex'>
                            <div className='h-147.5 overflow-auto w-full md:w-[40%] border-r border-gray-400'>
                                {/* chat list */}

                                {
                                    conversations.map((item, index) => {
                                        return (
                                            <Conversation handleSelctedConv={handleSelctedConv} item={item} key={index} ownData={ownData} activeConvId={activeConvId} />
                                        )
                                    })
                                }

                            </div>
                            <div className='w-full md:w-[60%] border-gray-400'>
                                <div className='border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center'>
                                    <div>
                                        <p className='text-md'>{selectedConvDetails?.userName}</p>
                                        <p className='text-sm text-gray-500'>{selectedConvDetails?.headline}</p>
                                    </div>
                                    <div><MoreVertIcon /></div>

                                </div>
                                <div className='h-90 w-full overflow-auto border-b border-gray-300'>
                                    <div className='w-full border-b border-gray-300 gap-3 p-4 '>
                                        <img src={selectedConvDetails?.profilePic} alt="Oggy" className='rounded-[100%] cursor-pointer w-16 h-15' />
                                        <div className='my-2'>
                                            <div className='text-md'>{selectedConvDetails?.userName}</div>
                                            <div className='text-sm text-gray-500'>{selectedConvDetails?.headline}</div>
                                        </div>

                                    </div>
                                    <div className='w-full'>
                                        {/* for each messages */}

                                        {
                                            messages.map((item, index) => {
                                                return (
                                                    <div key={index} className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                                        <div className='shrink-0'>
                                                            <img src={item?.sender?.profilePic} alt="" className='rounded-[100%] cursor-pointer w-12 h-12' />
                                                        </div>
                                                        <div className='mb-2 w-full'>
                                                            <div className='text-md'>{item?.sender?.userName}</div>
                                                            <div className='text-sm mt-6 hover:bg-gray-200'>{item?.message}</div>
                                                            {
                                                                item?.picture && <div className='my-2'><img src={item?.picture} className='w-60 h-45 rounded-md ' /></div>
                                                            }

                                                        </div>

                                                    </div>
                                                );
                                            })
                                        }



                                    </div>
                                </div>
                                {/* Space for typing message */}
                                <div className='p-2 w-full border-b border-gray-200 '>
                                    <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)} rows={4} className='w-full bg-gray-300 rounded-xl p-3 outline-0 text-sm' placeholder='Type a message...' />

                                </div>
                                <div className='p-3 flex justify-between'>
                                    <div>
                                        <label htmlFor='messageImage' className='cursor-pointer'><ImageIcon /></label>
                                        <input type="file" onChange={handleInputImage} id='messageImage' className='hidden' />
                                    </div>
                                    {
                                        !loading && <div onClick={handleSendMessage} className='px-3 py-1 cursor-pointer rounded-2xl border bg-orange-900 text-white '>Send

                                        </div>
                                    }

                                </div>

                            </div>
                        </div>
                    </Card>
                </div>
                <div className='hidden md:flex md:w-[25%]'>
                    <div className='sticky top-19'>
                        <Advertisement />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Messages
