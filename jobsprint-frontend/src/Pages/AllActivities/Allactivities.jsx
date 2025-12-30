import React from 'react'
import ProfileCard from '../../components/Profile Card/ProfileCard'
import Advertisement from '../../components/Advertisement/Advertisement'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Post from '../../components/Posts/Post'

const Allactivities = () => {

    const { id } = useParams();
    console.log(id)

    return (
        <div className='px-4 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
            {/* left side  */}
            <div className=' w-[21%] sm:block sm:w-[23%] hidden py-5'>
                <div className='h-fit'>
                    <ProfileCard />
                </div>

            </div>
            {/* middle side */}

            <div className='w-full py-5 sm:w-[50%]'>
                <div>
                    <Card padding = {1}>
                        <div className='flex justify-between items-center'>
                                <div className=' text-xl '>Activity</div>
                            </div>
                            <div className='cursor-pointer px-3 py-1 w-fit border rounded-4xl bg-purple-500 text-white font-semibold' >Posts</div>
                            <div className='my-2 flex flex-col gap-2'>
                                <div >
                                    <Post/>
                                </div>
                                 <div >
                                    <Post/>
                                </div>

                            </div>

                    </Card>
                </div>

            </div>

            {/* right side  */}
            <div className='w-[26%] py-5 hidden md:block'>

                <div className='my-5 sticky top-19'>
                    <Advertisement />
                </div>
            </div>

        </div>
    )
}

export default Allactivities
