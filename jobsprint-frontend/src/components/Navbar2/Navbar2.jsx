import React from 'react'
import { useState , useEffect} from 'react'
import './Navbar2.css'
import AddHomeIcon from '@mui/icons-material/AddHome';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import MyImage from "../../assets/My_image.jpeg";
import { Link, useLocation } from 'react-router-dom';

const Navbar2 = () => {
    const [searchTerm, setSearchTerm] = useState(false);
    const location = useLocation();

    const [userData, setuserData] = useState(null)

    useEffect(() => {
        let userData = localStorage.getItem('userInfo')
        setuserData(userData ? JSON.parse(userData) : null)

    }, [])
    console.log(location)
    return (
        <div className='bg-white h-13 flex justify-between py-1 xl: px-50 fixed top-0 w-full z-1000 '>
            <div className=' flex gap-2 items-center '>
                <Link to="/feed"><img src={"https://images-platform.99static.com//x43DEvYF24dPa-bBzpxj5NL93ZY=/199x174:1839x1814/fit-in/500x500/99designs-contests-attachments/77/77692/attachment_77692903"} alt="Job Sprint logo" className='w-12 h-12' /></Link>
                <div className='relative'>
                    <input type="searchInput" placeholder='Search jobs, skills, companies' className='searchInput border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 w-48 md:w-64 lg:w-80' />
                    {
                        searchTerm && <div className=' absolute w-88 left-0 bg-gray-200'>
                            <div className='flex gap-2 items-center p-2'>


                                {/* Search suggestions can go here */}
                                <div className='p-2 mb-1 gap-2 hover:bg-gray-300 cursor-pointer'>
                                    <img src="https://www.shutterstock.com/shutterstock/videos/1098847407/thumb/7.jpg?ip=x480" alt="Animated Engineer Image" />Software Engineer</div>
                                <div className='p-2 mb-1 gap-2 hover:bg-gray-300 cursor-pointer'><img src="https://www.shutterstock.com/shutterstock/videos/1098847407/thumb/7.jpg?ip=x480" alt="Animated Engineer Image" />Data Scientist</div>
                                <div className='p-2 mb-1 gap-2 hover:bg-gray-300 cursor-pointer'><img src="https://www.shutterstock.com/shutterstock/videos/1098847407/thumb/7.jpg?ip=x480" alt="Animated Engineer Image" />Product Manager</div>
                            </div>
                        </div>
                    }
                </div>

            </div>
            <div className=' hidden gap-10 md:flex '>
                <Link to="/feed" className=' flex flex-col items-center cursor-pointer'>
                    <AddHomeIcon sx={{ color: location.pathname === "/feed" ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === "/feed" ? "border-b-3" : ""}`}>Home
                    </div>
                </Link>
                <Link to="/mynetwork" className=' flex flex-col items-center cursor-pointer'>
                    <Diversity3SharpIcon sx={{ color: location.pathname === "/mynetwork" ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === "/mynetwork" ? "border-b-3" : ""}`}>My network
                    </div>
                </Link>
                <Link to="/resume" className=' flex flex-col items-center cursor-pointer'>
                    <AddSharpIcon sx={{ color: location.pathname === "/resume" ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === "/resume" ? "border-b-3" : ""}`}>Resume
                    </div>
                </Link>
                <div className=' flex flex-col items-center cursor-pointer'>
                    <WorkIcon sx={{ color: location.pathname === "/jobs" ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === "/jobs" ? "border-b-3" : ""}`}>Jobs
                    </div>
                </div>
                <Link to="/messages" className=' flex flex-col items-center cursor-pointer'>
                    <ChatIcon sx={{ color: location.pathname === "/messages" ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === "/messages" ? "border-b-3" : ""}`}>Messages
                    </div>
                </Link>
                <Link to={`/notification`} className=' flex flex-col items-center cursor-pointer'>
                    <div><NotificationsIcon sx={{ color: location.pathname === "/notifications" ? "black" : "gray" }} /> <span className='p-1 rounded-full text-sm bg-red-600 text-white'>1</span></div>
                    <div className={`text-sm text-gray-500 ${location.pathname === "/notification" ? "border-b-3" : ""}`}>Notifications
                    </div>
                </Link>
                <Link to={`/profile/${userData?._id}`} className=' flex flex-col items-center cursor-pointer'>
                    <img className="w-6 h-6 rounded-full object-cover" src={userData?.profilePic} alt="My Image" />
                    <div className='text-sm text-gray-500'>Me
                    </div>

                </Link>

            </div>
        </div>
    )
}

export default Navbar2
