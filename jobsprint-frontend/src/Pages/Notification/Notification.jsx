import React from 'react'
import ProfileCard from '../../components/Profile Card/ProfileCard'
import Advertisement from '../../components/Advertisement/Advertisement'
import Card from '../../components/Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Notification = () => {

  const [ownData, setownData] = useState(null)

  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([])

  const fetchNotificationData = async () => {
    await axios.get(`http://localhost:3000/api/notification`, { withCredentials: true }).then(res => {
      // console.log(res.data.notification)
      setNotifications(res.data.notification || [])
    }).catch(err => {
      console.log(err);
      alert("Something went wrong")
      // toast.error(err?.response?.data?.error)
    })
  }

  const handleOnClickNotification = async (item) => {
    await axios.put(`http://localhost:3000/api/notification/isRead`, { notificationId: item._id }, { withCredentials: true }).then(res => {
      if (item.type === "comment" && item.postId) {
        // Ensure ownData is populated before using it
        const userId = ownData?._id || JSON.parse(localStorage.getItem('userInfo'))?._id;
        navigate(`/profile/${userId}/activities/${item.postId}`);
      } else {
        navigate(`/mynetwork`);
      }

    }).catch(err => {
      console.log(err);
      alert("Something went wrong")
      // toast.error(err?.response?.data?.error)
    })
  }

  useEffect(() => {
    let userData = localStorage.getItem('userInfo')
    setownData(userData ? JSON.parse(userData) : null)

    fetchNotificationData()

  }, [])


console.log("OWN DATA:", ownData)
  return (
    <div className='px-4 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      {/* left side  */}
      <div className=' w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <ProfileCard data={ownData} />
        </div>

      </div>
      {/* middle side */}

      <div className='w-full py-5 sm:w-[50%]'>
        <div>
          <Card padding={0}>
            <div className='w-full'>
              {/* For each Notification  */}
              {
                notifications.map((item, index) => {
                  return (
                    <div key={ item._id || index} onClick={(e) => { handleOnClickNotification(item) }} className={`border-b cursor-pointer flex gap-4 items-center border-gray-300 p-3 ${item?.isRead ? "bg-gray-200" : "bg-orange-200"}`}>
                      <img src={item?.sender?.profilePic} className='rounded-b-4xl cursor-pointer w-15 h-15 ' />
                      <div>{item?.content}</div>
                    </div>
                  )
                })
              }

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
