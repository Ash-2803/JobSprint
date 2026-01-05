import React, { use } from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'
// import { Card } from '@mui/material'
import Card from '../../components/Card/Card';
import MyImage from "../../assets/My_image.jpeg";
import EditIcon from '@mui/icons-material/Edit';
import Post from '../../components/Posts/Post';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import Model from '../../components/Models/Model';
import Imagemodel from '../../components/ImageModel/Imagemodel';
import EditinfoModel from '../../components/EditinfoModel/EditinfoModel';
import EditaboutModel from '../../components/EditAboutModel/EditaboutModel';
import EditExperienceModel from '../../components/EditExperienceModel/EditExperienceModel';
import EditmessageModel from '../../components/EditMessageModel/EditmessageModel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Profile = () => {

    const { id } = useParams();

    const [imageSetModel, setImageSetModel] = useState(false);
    const [circularImage, setCircularImage] = useState(true);

    const [infoModel, setInfoModel] = useState(false);
    const [aboutInfoModel, setAboutInfoModel] = useState(false);
    const [experienceModel, setexperienceModel] = useState(false)
    const [messageModel, setmessageModel] = useState(false);

    const [userData, setUserData] = useState(null);
    const [postData, setPostData] = useState([]);
    const [ownData, setOwnData] = useState(null);

    const [updateExp, setUpdateExp] = useState({ clicked: "", id: "", datas: {} })

    const updateExpEdit = (id, data) => {
        setUpdateExp({ ...updateExp, clicked: true, id: id, data: data })
        setexperienceModel(!experienceModel)
    }


    useEffect(() => {
        fecthDataOnLoad()
    }, [id])

    const fecthDataOnLoad = async () => {
        try {
            const [userDatas, postDatas, ownDatas] = await Promise.all([
                axios.get(`http://localhost:3000/api/auth/user/${id}`),
                axios.get(`http://localhost:3000/api/post/getTop5Post/${id}`),
                axios.get('http://localhost:3000/api/auth/self', { withCredentials: true })
            ])

            setUserData(userDatas.data.user)
            setPostData(postDatas.data.posts)
            setOwnData(ownDatas.data.user)
            localStorage.setItem('userInfo', JSON.stringify(ownDatas.data.user));

            // console.log(userDatas)
            // console.log(postDatas)
            // console.log(ownDatas)

        } catch (err) {
            console.log(err)
            alert("Something went wrong")
        }
    }


    const handleMessageModel = () => {
        setmessageModel(!messageModel)
    }

    const handleExperienceModel = () => {
        if (experienceModel) {
            setexperienceModel({ clicked: "", id: "", datas: {} })
        }
        setexperienceModel(!experienceModel)


    }
    const handleAboutInfoModel = () => {
        setAboutInfoModel(!aboutInfoModel)
    }

    const handleinfoModel = () => {
        setInfoModel(!infoModel)
    }
    const handleImageModelOpenClose = () => {
        setImageSetModel(!imageSetModel);
    }
    const handleonEditCover = () => {
        setImageSetModel(true)
        setCircularImage(false);
    }
    const handleCircularImageOpen = () => {
        setImageSetModel(true)
        setCircularImage(true);
    }

    const handleEditFunc = async (data) => {
        await axios.put(`http://localhost:3000/api/auth/update`, { user: data }, { withCredentials: true }).then(res => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
        })

    }

    const amIFriend = () => {
        let arr = userData?.friends?.filter((item) => { return item === ownData?._id })
        return arr?.length;
    }

    const isInPendingList = () => {
        let arr = userData?.pending_friends?.filter((item) => { return item === ownData?._id })
        return arr?.length;
    }

    const inInSelfPendingList = () => {
        let arr = ownData?.pending_friends?.filter((item) => { return item === userData?._id })
        return arr?.length;
    }

    const checkFriendStatus = () => {
        if (amIFriend()) {
            return "Disconnect"
        } else if (inInSelfPendingList()) {
            return "Approve Request"
        } else if (isInPendingList()) {
            return "Request Sent"
        } else {
            return "Connect"
        }
    }

    const handleSendFriendRequest = async () => {
        if (checkFriendStatus() === "Request Sent") return

        if (checkFriendStatus() === "Connect") {
            await axios.post(`http://localhost:3000/api/auth/sendFriendRequest`, { receiver: userData?._id }, { withCredentials: true }).then(res => {
                toast.success(res.data.message)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }).catch(err => {
                console.log(err);
                alert("Something went wrong")
                toast.error(err?.response?.data?.error)
            })
        } else if (checkFriendStatus() === "Approve Request") {
            await axios.post(`http://localhost:3000/api/auth/acceptFriendRequest`, { friendId: userData?._id }, { withCredentials: true }).then(res => {
                toast.success(res.data.message)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }).catch(err => {
                console.log(err);
                alert("Something went wrong")
                toast.error(err?.response?.data?.error)
            })
        } else {
            await axios.delete(`http://localhost:3000/api/auth/removeFromFriendList/${userData?._id}`, { withCredentials: true }).then(res => {
                toast.success(res.data.message)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            }).catch(err => {
                console.log(err);
                alert("Something went wrong")
                toast.error(err?.response?.data?.error)
            })
        }

    }
    const handleLogout = async () => {
        await axios.post(`http://localhost:3000/api/auth/logout`, {}, { withCredentials: true }).then(res => {
            localStorage.clear();
            window.location.reload();

        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
            toast.error(err?.response?.data?.error)
        })
    }

    const copytoClipboard = async () => {
        try {
            let string = `http://localhost:5173/profile/${id}`
            await navigator.clipboard.writeText(string)
            toast.success("Copied to ClipBoard!")

        } catch (err) {
            console.error("Failed to Copy", err)
        }
    }
    return (
        <div className='px-5 xl:px-50 py-5  pt-12 flex flex-col gap-5 w-full mt-5 bg-gray-100'>
            <div className='flex justify-between'>
                {/* left side main section  */}
                <div className='w-full md:w-[70%]'>
                    <div>
                        <Card padding={0}>
                            <div className='w-full h-fit'>
                                <div className='relative w-full h-50'>
                                    {
                                        userData?._id === ownData?._id && <div className='absolute cursor-pointer top-3 right-3 z-20 w-8.75 flex justify-center items-center h-8.5 rounded-full p-3 bg-white ' onClick={handleonEditCover}><EditIcon className='text-gray-700' /></div>
                                    }


                                    <img className='w-full h-50 rounded-tr-lg rounded-t-lg' src={userData?.coverPic} alt="LandScape Image" />
                                    <div onClick={handleCircularImageOpen} className='absolute object-cover top-24 z-10 left-6'><img className="rounded-full border-2 border-white cursor-pointer w-35 h-35" src={userData?.profilePic} alt="Oggy" /></div>

                                </div>
                                <div className='mt-10 relative px-8 py-2'>
                                    {
                                        userData?._id === ownData?._id && <div className='absolute cursor-pointer top-3 right-3 z-20 w-8.75 flex justify-center items-center h-8.5 rounded-full p-3 bg-white ' onClick={handleinfoModel} ><EditIcon className='text-gray-700' /></div>
                                    }
                                    <div className='w-full'>
                                        <div className='text-2xl font-bold'>{userData?.userName}</div>
                                        <div className='text-gray-700'>{userData?.headline}</div>
                                        <div className='text-gray-500'>{userData?.curr_location}</div>
                                        <div className='text-orange-800 text-md hover:underline w-fit cursor-pointer'>{userData?.friends?.length} connections</div>
                                        <div className='md:flex w-full justify-between'>
                                            <div className='my-5 flex gap-5'>
                                                <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>Open to</div>
                                                <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold' onClick={copytoClipboard}>Share Profile</div>
                                                {
                                                    userData?._id === ownData?._id && <div className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold' onClick={handleLogout}>Logout</div>
                                                }
                                            </div>
                                            <div className='my-5 flex gap-5'>
                                                {amIFriend() ? <div onClick={handleMessageModel} className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>Message</div> : null}
                                                {
                                                    userData?._id === ownData?._id ? null : <div onClick={handleSendFriendRequest} className='cursor-pointer p-2 border rounded-lg bg-orange-500 text-white font-semibold'>{checkFriendStatus()}</div>
                                                }

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </Card>
                    </div>
                    {/* about section */}
                    <div className='mt-5 '>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className=' text-xl '>About</div>
                                {
                                    userData?._id === ownData?._id && <div onClick={handleAboutInfoModel}><EditIcon className='text-gray-700 cursor-pointer' /></div>
                                }
                            </div>
                            <div className='text-gray-700 w-[80%] text-md'>
                                {userData?.about}
                            </div>
                        </Card>
                    </div>
                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className=' text-xl '>Skills</div>
                            </div>
                            <div className='text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap'>

                                {
                                    userData?.skills.map((item, index) => {
                                        return (
                                            <div key={index} className='py-2 px-3 cursor-pointer bg-orange-700 text-white rounded-lg'>{item}</div>
                                        )
                                    })
                                }


                            </div>
                        </Card>

                    </div>
                    {/* Activity Section  */}
                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className=' text-xl '>Activity</div>
                            </div>
                            <div className='cursor-pointer px-3 py-1 w-fit border rounded-4xl bg-purple-500 text-white font-semibold' >Posts</div>
                            {/* Parent div for scroll activity */}
                            <div className='overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full'>
                                {
                                    postData.map((item, index) => {
                                        return (
                                            <Link to={`/profile/:${id}/activities/${item?._id}`} className='shrink-0 cursor-pointer w-87.5 h-140 '>

                                                <Post profile={1} item={item} personalData={ownData} />
                                            </Link>
                                        )
                                    })
                                }


                            </div>
                            {
                                postData.slice(0, 1).map((item, index) => {
                                    return (
                                        <div className='w-full flex justify-center items-center'>
                                            <Link to={`/profile/${id}/activities`} className='p-2 rounded-xl cursor-pointer hover:bg-gray-400'>Show All Posts <ArrowRightAltIcon /> </Link>

                                        </div>
                                    )
                                })
                            }

                        </Card>

                    </div>
                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className=' text-xl '>Experience</div>
                                {
                                    userData?._id === ownData?._id && <div onClick={handleExperienceModel}><AddIcon className="text-orange-600 cursor-pointer" /></div>
                                }
                            </div>
                            {/* Expereince details  */}
                            <div className='mt-5'>
                                {
                                    userData?.experience.map((item, index) => {
                                        return (
                                            <div className='p-2 border-t border-gray-300 flex justify-between'>
                                                <div>
                                                    <div className='font-bold text-lg'>{item.designation}</div>
                                                    <div className='text-gray-700 text-sm'>{item.company_name}</div>
                                                    <div className='text-gray-700 text-sm'>{item.duration}</div>
                                                    <div className='text-gray-700 text-sm'>{item.location}</div>
                                                </div>
                                                {
                                                    userData?._id === ownData?._id && <div className='cursor-pointer'>
                                                        <EditIcon className='text-gray-700 cursor-pointer' onClick={() => { updateExpEdit(item._id, item) }} />
                                                    </div>
                                                }

                                            </div>
                                        );
                                    })
                                }


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
            {
                imageSetModel && <Model title="Upload Image" closeModel={handleImageModelOpenClose} >
                    <Imagemodel handleEditFunc={handleEditFunc} selfData={ownData} isCircular={circularImage} />
                </Model>
            }
            {
                infoModel && <Model title="Edit Info" closeModel={handleinfoModel} >
                    <EditinfoModel handleEditFunc={handleEditFunc} selfData={ownData} />
                </Model>
            }
            {
                aboutInfoModel && <Model title="Edit About" closeModel={handleAboutInfoModel}>
                    <EditaboutModel handleEditFunc={handleEditFunc} selfData={ownData} />


                </Model>
            }
            {
                experienceModel && <Model title="expereince" closeModel={handleExperienceModel}>
                    <EditExperienceModel handleEditFunc={handleEditFunc} selfData={ownData} updateExp={updateExp} setupdateExp={updateExpEdit} />
                </Model>
            }
            {
                messageModel && <Model title="expereince" closeModel={handleMessageModel}>
                    <EditmessageModel selfData={ownData} userData = {userData} />
                </Model>
            }

            <ToastContainer />
        </div>
    )
}

export default Profile