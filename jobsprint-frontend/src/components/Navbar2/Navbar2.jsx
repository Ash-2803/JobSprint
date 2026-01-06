import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar2.css'
import AddHomeIcon from '@mui/icons-material/AddHome';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import MyImage from "../../assets/My_image.jpeg";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Navbar2 = () => {
    // const [dropDown, setdropDown] = useState(false);
    const location = useLocation();

    const [userData, setuserData] = useState(null)

    const [searchTerm, setsearchTerm] = useState("")
    const [deBouncedTerm, setDeBouncedTerm] = useState("")
    const [searcUser, setsearcUser] = useState([])

    const [notificationCount,setnotificationCount] = useState("")

    useEffect(() => {
        const handler = setTimeout(() => {
            setDeBouncedTerm(searchTerm)
        }, 1000);
        return () => {
            clearTimeout(handler)
        };
    }, [searchTerm])

    useEffect(() => {
        if (deBouncedTerm) {
            searchAPICall()
        }
    }, [deBouncedTerm])

    const searchAPICall = async () => {
        await axios.get(`http://localhost:3000/api/auth/findUser?query=${deBouncedTerm}`, { withCredentials: true }).then(res => {
            console.log(res)
            

            setsearcUser(res.data.users)
        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
        });
    }

    const fetchNotification = async()=>{
        await axios.get(`http://localhost:3000/api/notification/activeNotification`,{withCredentials:true}).then(res=>{
            var count = res.data.count
            setnotificationCount(count)
        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
        });
    }

    useEffect(() => {
        let userData = localStorage.getItem('userInfo')
        setuserData(userData ? JSON.parse(userData) : null)

        fetchNotification()

    }, [])
    // console.log(location)
    return (
        <div className='bg-white h-13 flex justify-between py-1 xl: px-50 fixed top-0 w-full z-1000 '>
            <div className=' flex gap-2 items-center '>
                <Link to="/feed"><img src={"https://images-platform.99static.com//x43DEvYF24dPa-bBzpxj5NL93ZY=/199x174:1839x1814/fit-in/500x500/99designs-contests-attachments/77/77692/attachment_77692903"} alt="Job Sprint logo" className='w-12 h-12' /></Link>
                <div className='relative'>
                    <input value={searchTerm} onChange={(e) => { setsearchTerm(e.target.value) }} type="searchInput" placeholder='Search jobs, skills, companies' className='searchInput border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 w-48 md:w-64 lg:w-80' />
                    {
                        searcUser.length > 0 && deBouncedTerm.length!== 0 && <div className=' absolute w-88 left-0 bg-gray-200'>
                            {
                                searcUser.map((item, index) => {
                                    return (
                                        <Link to = {`/profile/${item?._id}`} key={index} className='flex gap-2 mb-1 items-center cursor-pointer' onClick={()=>setsearchTerm("")}>
                                            <div><img src={item?.profilePic} className='rounded-full w-10 h-10' /></div>
                                            <div>{item?.userName}</div>
                                        </Link>
                                    )
                                })
                            }

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
                <Link to="/jobs" className=' flex flex-col items-center cursor-pointer'>
                    <WorkIcon sx={{ color: location.pathname === "/jobs" ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === "/jobs" ? "border-b-3" : ""}`}>Jobs
                    </div>
                </Link>
                <Link to="/messages" className=' flex flex-col items-center cursor-pointer'>
                    <ChatIcon sx={{ color: location.pathname === "/messages" ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === "/messages" ? "border-b-3" : ""}`}>Messages
                    </div>
                </Link>
                <Link to={`/notification`} className=' flex flex-col items-center cursor-pointer'>
                    <div><NotificationsIcon sx={{ color: location.pathname === "/notifications" ? "black" : "gray" }} /> { notificationCount>0 && <span className='p-1 rounded-full text-sm bg-red-600 text-white'>{notificationCount}</span>} </div>
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
