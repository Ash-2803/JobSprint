import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

const EditmessageModel = ({ selfData, userData }) => {

    const [message, setMessage] = useState('')

    const handleSendMsg = async () => {
        await axios.post(`http://localhost:3000/api/conversation/add-conversation`, { receiverId: userData?._id, message }, { withCredentials: true }).then(res => {

            window.location.reload();
        }).catch(err => {
            console.log(err);
            alert("Something went wrong")
            // toast.error(err?.response?.data?.error)
        })
    }
    return (
        <div className='my-5'>
            <div className='w-full mb-4'>
                <label>Send Message</label>
                <br />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} cols={10} rows={10} className='p-2 mt-1 w-full border rounded-md'
                    placeholder='Enter Message here' ></textarea>
            </div>
            <div>
                <div onClick={handleSendMsg} className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl'>Send</div>
            </div>
        </div>
    )
}

export default EditmessageModel
