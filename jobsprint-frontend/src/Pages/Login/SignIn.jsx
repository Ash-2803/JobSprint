import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Googlelogincomponent from '../../components/GoogleLogin/Googlelogincomponent'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';

const SignIn = (props) => {

    const navigate = useNavigate();
    const [loginField, setloginField] = useState({ emailId: "", password: "" })

    const onChangeInput = (event, key) => {
        setloginField({ ...loginField, [key]: event.target.value })
    }

    const handleLogn = async () => {
        if (loginField.emailId.trim().length === 0 || loginField.password.trim().length === 0) {
            return toast.error("Please fill the credentials")
        }
        await axios.post('http://localhost:3000/api/auth/login', loginField, { withCredentials: true }).then((res) => {

            props.changeLoginValue(true)
            localStorage.setItem('isLogin' , 'true')
            localStorage.setItem('userInfo', JSON.stringify(res.data.user))

            navigate('/feed')
        }).catch((err) => {
            console.log(err)
            toast.error(err?.response?.data?.error)
        })
    }
    return (

        <div className='w-full flex flex-col items-center justify-center box-border my-10'>
            <h1 className='text-4xl font-bold text-center mt-10'>Welcome Back!</h1>

            <div className='w-[85%] md:w-[30%] shadow-lg bg-white rounded-lg mt-10 p-6 box-border'>
                <div className="w-full mb-4">
                    <Googlelogincomponent changeLoginValue = {props.changeLoginValue} />
                </div>
                <div className='flex items-center gap-2 my-4'>
                    <div className='w-full h-px bg-gray-300'></div>
                    <span className='text-gray-500'>OR</span>
                    <div className='w-full h-px bg-gray-300'></div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={loginField.emailId} onChange={(e) => { onChangeInput(e, 'emailId') }} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Enter your email' />
                        <label htmlFor="password">Password</label>
                        <input type="password" value={loginField.password} onChange={(e) => { onChangeInput(e, 'password') }} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Enter your password' />
                        <div className='mt-4'>
                            <button onClick={handleLogn} className='w-full bg-orange-400 text-white py-3 rounded-md hover:bg-orange-500 cursor-pointer'>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='mt-4 mb-10'>Don't have an account? <Link to={"/signup"} className='text-orange-500 cursor-pointer hover:underline'>Sign Up</Link></p>
            <ToastContainer />
        </div>
    )
}

export default SignIn
