import Card from '../../components/Card/Card'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Conversation from '../../components/Conversation/Conversation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import Advertisement from '../../components/Advertisement/Advertisement';

const Messages = () => {
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
                                <Conversation />
                            </div>
                            <div className='w-full md:w-[60%] border-gray-400'>
                                <div className='border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center'>
                                    <div>
                                        <p className='text-md'>Oggy</p>
                                        <p className='text-sm text-gray-500'>Software Engineer</p>
                                    </div>
                                    <div><MoreVertIcon /></div>

                                </div>
                                <div className='h-90 w-full overflow-auto border-b border-gray-300'>
                                    <div className='w-full border-b border-gray-300 gap-3 p-4 '>
                                        <img src="https://thumbnail.imgbin.com/5/21/24/oggy-and-the-cockroaches-blue-cartoon-cat-on-skateboard-ZFQpMwy0_t.jpg" alt="Oggy" className='rounded-[100%] cursor-pointer w-16 h-15' />
                                        <div className='my-2'>
                                            <div className='text-md'>Oggy</div>
                                            <div className='text-sm text-gray-500'>Software Engineer</div>
                                        </div>

                                    </div>
                                    <div className='w-full'>
                                        {/* for each messages */}
                                        <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                            <div className='shrink-0'>
                                                <img src="https://thumbnail.imgbin.com/5/21/24/oggy-and-the-cockroaches-blue-cartoon-cat-on-skateboard-ZFQpMwy0_t.jpg" alt="Oggy" className='rounded-[100%] cursor-pointer w-12 h-12' />
                                            </div>
                                            <div className='mb-2 w-full'>
                                                <div className='text-md'>Oggy</div>
                                                <div className='text-sm mt-6 hover:bg-gray-200'>How are you?</div>
                                                <div className='my-2'><img src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" alt="LandScape" className='w-60 h-45 rounded-md ' /></div>

                                            </div>

                                        </div>
                                        <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                            <div className='shrink-0'>
                                                <img src="https://thumbnail.imgbin.com/5/21/24/oggy-and-the-cockroaches-blue-cartoon-cat-on-skateboard-ZFQpMwy0_t.jpg" alt="Oggy" className='rounded-[100%] cursor-pointer w-12 h-12' />
                                            </div>
                                            <div className='mb-2 w-full'>
                                                <div className='text-md'>Oggy</div>
                                                <div className='text-sm mt-6 hover:bg-gray-200'>How are you?</div>
                                                {/* <div className='my-2'><img src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" alt="LandScape" className='w-60 h-45 rounded-md ' /></div> */}

                                            </div>

                                        </div>
                                        <div className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                            <div className='shrink-0'>
                                                <img src="https://thumbnail.imgbin.com/5/21/24/oggy-and-the-cockroaches-blue-cartoon-cat-on-skateboard-ZFQpMwy0_t.jpg" alt="Oggy" className='rounded-[100%] cursor-pointer w-12 h-12' />
                                            </div>
                                            <div className='mb-2 w-full'>
                                                <div className='text-md'>Oggy</div>
                                                {/* <div className='text-sm mt-6 hover:bg-gray-200'>How are you?</div> */}
                                                <div className='my-2'><img src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" alt="LandScape" className='w-60 h-45 rounded-md ' /></div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                {/* Space for typing message */}
                                <div className='p-2 w-full border-b border-gray-200 '>
                                    <textarea rows={4} className='w-full bg-gray-300 rounded-xl p-3 outline-0 text-sm' placeholder='Type a message...'/>

                                </div>
                                <div className='p-3 flex justify-between'>
                                    <div>
                                        <label htmlFor='messageImage' className='cursor-pointer'><ImageIcon /></label>
                                        <input type="file" id='messageImage' className='hidden' />
                                    </div>
                                    <div className='px-3 py-1 cursor-pointer rounded-2xl border bg-orange-900 text-white '>Send

                                    </div>

                                </div>

                            </div>
                        </div>
                    </Card>
                </div>
                <div className='hidden md:flex md:w-[25%]'>
                    <div className='sticky top-19'>
                        <Advertisement/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Messages
