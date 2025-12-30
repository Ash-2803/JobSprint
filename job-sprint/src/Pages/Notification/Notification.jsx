import React from 'react'
import ProfileCard from '../../components/Profile Card/ProfileCard'
import Advertisement from '../../components/Advertisement/Advertisement'
import Card from '../../components/Card/Card'

const Notification = () => {
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
            <Card padding = {0}>
               <div className='w-full'>
                {/* For each Notification  */}
                <div className={`border-b cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                    <img src="https://thumbnail.imgbin.com/5/21/24/oggy-and-the-cockroaches-blue-cartoon-cat-on-skateboard-ZFQpMwy0_t.jpg" alt="Oggy" className='rounded-b-4xl cursor-pointer w-15 h-15 ' />
                    <div>Oggy has sent you the friend request</div>
                </div>
                <div className={`border-b cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                    <img src="https://thumbnail.imgbin.com/5/21/24/oggy-and-the-cockroaches-blue-cartoon-cat-on-skateboard-ZFQpMwy0_t.jpg" alt="Oggy" className='rounded-b-4xl cursor-pointer w-15 h-15 ' />
                    <div>Oggy has commented on your post</div>
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

export default Notification
