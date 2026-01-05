import React from 'react'
import Card from '../Card/Card'
import MyImage from "../../assets/My_image.jpeg";
import { data, Link } from 'react-router-dom';

const ProfileCard = (props) => {
// console.log(props)
    return (
        <Card padding={0}>
            <Link to = {`/profile/${props.data?._id}`} className='relative h-25'>
                <div  className=' relative w-full h-22 rounded-md'>
                    <img src={props.data?.coverPic} className='rounded-t-md h-full w-full' alt="LandScape Image" />
                </div>
                <div className='absolute top-15 left-12 z-10'>
                    <img src={props?.data?.profilePic} className="rounded-full border-2 h-15 w-15 border-white cursor-pointer object-cover" alt="My Image" />
                </div>
            </Link>
            <div className='p-5 '>
        <div className='text-sm my-1'>{props?.data?.userName}</div>
        <div className='text-sm my-1'>{props?.data?.headline}</div>
        <div className='text-sm my-1'>{props?.data?.curr_location}</div>
        <div className='text-sm my-1'>{props?.data?.curr_company}</div>
            </div>  
        </Card>
    )
}

export default ProfileCard
