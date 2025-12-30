import React from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'
// import { Card } from '@mui/material'
import Card from '../../components/Card/Card';
import MyImage from "../../assets/My_image.jpeg";
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
    return (
        <div className='px-5 xl:px-50 py-5  pt-12 flex flex-col gap-5 w-full mt-5 bg-gray-100'>
            <div className='flex justify-between'>
                {/* left side main section  */}
                <div className='w-full md:w-[70%]'>
                    <div>
                        <Card padding={0}>
                            <div className='w-full h-fit'>
                                <div className='relative w-full h-50'>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-8.75 flex justify-center items-center h-8.5 rounded-full p-3 bg-white '><EditIcon className='text-gray-700' /></div>

                                    <img className='w-full h-50 rounded-tr-lg rounded-t-lg' src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" alt="LandScape Image" />
                                    <div className='absolute object-cover top-24 z-10 left-6'><img className="rounded-full border-2 border-white cursor-pointer w-35 h-35" src={MyImage} alt="Oggy" /></div>

                                </div>
                                <div className='mt-10 relative px-8 py-2'>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-8.75 flex justify-center items-center h-8.5 rounded-full p-3 bg-white '><EditIcon className='text-gray-700' /></div>
                                    <div className='w-full'>
                                        <div className='text-2xl font-bold'>Ash</div>
                                        <div className='text-gray-700'>Software Engineer | Full Stack Developer</div>
                                        <div className='text-gray-500'>Delhi</div>
                                        <div className='text-orange-800 text-md hover:underline w-fit cursor-pointer'>500+ connections</div>
                                        <div className='md:flex w-full justify-between'>
                                            <div className='my-5 flex gap-5'>
                                                <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>Open to</div>
                                                <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>Share Profile</div>
                                                <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>Logout</div>
                                            </div>
                                            <div className='my-5 flex gap-5'>
                                                <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>Message</div>
                                                <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>Connect</div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </Card>
                    </div>
                    <div className='mt-5 '>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className=' text-xl '>About</div>
                                <div><EditIcon className='text-gray-700 cursor-pointer' /></div>
                            </div>
                            <div className='text-gray-700 w-[80%] text-md'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit, soluta amet a nostrum doloribus provident voluptatibus facilis, debitis, nemo sequi! Numquam, impedit eligendi. Veniam voluptas eius soluta minima totam?
                            </div>
                        </Card>
                    </div>
                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className=' text-xl '>Skills</div>
                            </div>
                            <div className='text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap'>

                                <div className='py-2 px-3 cursor-pointer bg-orange-700 text-white rounded-lg'>JavaScript</div>
                                <div className='py-2 px-3 cursor-pointer bg-orange-700 text-white rounded-lg'>React</div>
                                <div className='py-2 px-3 cursor-pointer bg-orange-700 text-white rounded-lg'>Node.js</div>
                                <div className='py-2 px-3 cursor-pointer bg-orange-700 text-white rounded-lg'>Express</div>
                                <div className='py-2 px-3 cursor-pointer bg-orange-700 text-white rounded-lg'>Python</div>
                                <div className='py-2 px-3 cursor-pointer bg-orange-700 text-white rounded-lg'>Mongo DB</div>

                            </div>  
                        </Card>

                    </div>

                </div>
                <div className='hidden md:flex md:w-[28%]'>
                    <div className='sticky top-19'>
                        <Advertisement />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile
