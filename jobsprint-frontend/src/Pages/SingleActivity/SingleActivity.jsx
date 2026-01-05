import React from 'react'
import ProfileCard from '../../components/Profile Card/ProfileCard'
import Advertisement from '../../components/Advertisement/Advertisement'
import Card from '../../components/Card/Card'
import Post from '../../components/Posts/Post'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleActivity = () => {

    const { id, postId } = useParams();
    // console.log("POST ID FROM ROUTE:", postId);


    const [ownData, setOwnData] = useState(null)
    const [post , setPost] = useState(null)

    const fetchDataOnLoad = async()=>{
        await axios.get(`http://localhost:3000/api/post/getPostById/${postId}`).then(res=>{
            console.log(res)
            setPost(res.data.post)

        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
        });

    }
    useEffect(() => {
        fetchDataOnLoad()
        let userData = localStorage.getItem('userInfo')
        setOwnData(userData ? JSON.parse(userData) : null)

    }, [])
    return (
        <div className='px-4 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
            {/* left side  */}
            <div className=' w-[21%] sm:block sm:w-[23%] hidden py-5'>
                <div className='h-fit'>
                    <ProfileCard data = {post?.user} />
                </div>

            </div>
            {/* middle side */}

            <div className='w-full py-5 sm:w-[50%]'>
                <div>
                    <Card padding={1}>
                        <div >
                            <Post item={post} personalData={ownData} />
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
