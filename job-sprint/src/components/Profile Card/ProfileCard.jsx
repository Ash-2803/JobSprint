import React from 'react'
import Card from '../Card/Card'
import MyImage from "../../assets/My_image.jpeg";

const ProfileCard = () => {
  return (
    <Card padding = {0}>
        <div className='relative h-25'>
        <div className=' relative w-full h-22 rounded-md'>          
            <img src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=" className='rounded-t-md h-full w-full' alt="LandScape Image" />
        </div>
        <div className='absolute top-15 left-12 z-10'>
            <img src={MyImage} className="rounded-full border-2 h-15 w-15 border-white cursor-pointer object-cover"  alt="My Image" />
        </div>
        </div>
    </Card>
  )
}

export default ProfileCard
