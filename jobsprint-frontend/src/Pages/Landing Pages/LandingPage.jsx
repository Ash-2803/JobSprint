import React from 'react'
import { Link } from 'react-router-dom'
import Googlelogincomponent from '../../components/GoogleLogin/Googlelogincomponent'
const LandingPage = () => {
    return (
        <div className='my-4 py-12.5 md:pl-30 px-5 md:flex justify-between'>
            <div className='md:w-[50%]'>
                <h1 className='text-4xl font-bold'>Welcome to JobSprint</h1>
                <p className='mt-4 text-lg'>Find your dream job with our platform</p>
                <div className="w-full mb-4 mt-3">
                    <Googlelogincomponent />
                </div>
                <Link to = {"/signin"} className='flex mx-auto mt-5 py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 cursor-pointer'>
                    Sign in with Email
                </Link>

                <div className=' mx-auto mb-4 text-sm w-[70%] mt-6'>By clicking Continue, you agree to
                    <span className="text-orange-400 cursor-pointer hover:underline "> JobSprint's Terms of Service and Privacy Policy</span>,<span className="text-orange-400 cursor-pointer hover:underline ">Cookies Policy</span>.

                    <Link to={"/signup"} className=' mx-auto text-center mb-4 text-1g w-[70%] mt-4'>New to JobSprint?<span className="text-orange-400 cursor-pointer hover:underline "> Create an account</span>.
                    </Link>
                </div>
            </div>
            <div className='md:w-[50%] h-120'>
                <img src={"https://images-platform.99static.com//x43DEvYF24dPa-bBzpxj5NL93ZY=/199x174:1839x1814/fit-in/500x500/99designs-contests-attachments/77/77692/attachment_77692903"} alt="Job Sprint logo" className='w-full h-full' />
            </div>
        </div>
    )
}

export default LandingPage
