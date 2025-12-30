import React from 'react'
import ProfileCard from '../../components/Profile Card/ProfileCard'
import Advertisement from '../../components/Advertisement/Advertisement'
import Card from '../../components/Card/Card'
import Post from '../../components/Posts/Post'

const SingleActivity = () => {
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
                    <Card padding={1}>
                        <div >
                            <Post />
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

export default SingleActivity
