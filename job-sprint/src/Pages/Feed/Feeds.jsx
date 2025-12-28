import React from 'react'
import Card from '../../components/Card/Card'
import ProfileCard from '../../components/Profile Card/ProfileCard'
import MyImage from "../../assets/My_image.jpeg";
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp';
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';


const Feeds = () => {
  return (
    <div className='px-4 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      {/* left side  */}
      <div className=' w-[21%] sm:block sm:w-[23%] hidden py-5'>
      <div className='h-fit'>
      <ProfileCard/>
      </div>
      <div className='w-full my-5'>
      <Card padding={1}>
        {/* <div className='font-semibold text-lg mb-3'>Skills</div> */}
        <div className=' w-full flex justify-between'>
          <div>Profile Viewers</div>
          <div className='text-orange-400'>20</div>
          </div>
          <div className=' w-full flex justify-between'>
          <div>Post Impression</div>
          <div className='text-orange-400'>90</div>
        </div>
      </Card>
      </div>
      </div>
      {/* middle side */}
      
    <div className='w-full py-5 sm:w-[50%]'>
      <div>
        <Card padding={1}>
        <div className='flex gap-2 items-center'>
          <img src={MyImage} alt="My Image" className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer'  />
          <div className='w-full border py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Post Something You will</div>
        </div>
        <div className='w-full flex mt-3'>
          <div className='w-1/3 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-md'>
            <PlayCircleFilledSharpIcon className="text-green-500" />
            <div className='text-sm'>Video</div>    
          </div>
          <div className='w-1/3 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-md'>
            <AddPhotoAlternateSharpIcon className="text-blue-500" />
            <div className='text-sm'>Photo</div>    
          </div>
          <div className='w-1/3 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-md'>
            <DescriptionSharpIcon className="text-red-600" />
            <div className='text-sm'>Write Article</div>    
          </div>
        </div>

        </Card>
      </div>
      <div className='border b-1 border-gray-400 w-full my-5'/>
      <div className='w-full flex flex-col gap-5 '>
      Post
      </div>
    </div>

     
   
      {/* right side  */}
      <div className='w-[26%] py-5 hidden md:block'>
        <div>
          <Card padding={1}>
            <div className='text-xl'>JobSprint News</div>
            <div className='text-gray-600'>Latest updates and news from JobSprint</div>
            <div className='my-1'>
              <div className='font-semibold text-md'>JobSprint launches new feature</div>
              <div className='text-xs text-gray-400'>JobSprint has launched a new feature to help you connect with recruiters more easily.</div>
            </div>
            </Card>
        </div>

      </div>
      
    </div>
  )
}

export default Feeds
