import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Googlelogincomponent from '../../components/GoogleLogin/Googlelogincomponent'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const Signup = (props) => {

    const navigate = useNavigate();


    const [registerField, setRegisterField] = useState({ emailId: "", password: "", userName: "" })

    const handleInputField = (event, key) => {
        setRegisterField({ ...registerField, [key]: event.target.value })
    }

    const handleSignup = async () => {
        if (registerField.emailId.trim().length === 0 || registerField.password.trim().length === 0 || registerField.userName.trim().length === 0) {
            return toast.error("Please fill All the details")
        }
        await axios.post('http://localhost:3000/api/auth/register', registerField,{withCredentials:true}).then(res => {

            toast.success("You have registered successfully")
            setRegisterField({...registerField , emailId : "" , password : "", userName : ""})
            navigate('/signin')
        }).catch((err) => {
            console.log(err)
            toast.error(err?.response?.data?.error)
        })
    }
    return (
        <div className='w-full flex flex-col items-center justify-center box-border my-10'>
            <h1 className='text-4xl font-bold text-center mt-10'>Make your dream job come true</h1>
            <div className='w-[85%] md:w-[30%] shadow-lg bg-white rounded-lg mt-10 p-6 box-border'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <label htmlFor="f_name">Full Name</label>
                        <input type="text" value={registerField.userName} onChange={(e) => { handleInputField(e, 'userName') }} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Enter your full name' />
                        <label htmlFor="email">Email</label>
                        <input type="email" value={registerField.emailId} onChange={(e) => { handleInputField(e, 'emailId') }} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Enter your email' />
                        <label htmlFor="password">Password</label>
                        <input type="password" value={registerField.password} onChange={(e) => { handleInputField(e, 'password') }} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Enter your password' />
                        {/* <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" value={registerField.confirm_password} onChange={(e) => { handleInputField(e, 'confirm_password') }} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Confirm your password' /> */}
                        <div className='mt-4'>
                            <button onClick={handleSignup} className='w-full bg-orange-400 text-white py-3 rounded-md hover:bg-orange-500 cursor-pointer'>Sign Up</button>
                        </div>

                    </div>

                </div>
                <div className='flex items-center gap-2 my-4'>
                    <div className='w-full h-px bg-gray-300'></div>
                    <span className='text-gray-500'>OR</span>
                    <div className='w-full h-px bg-gray-300'></div>
                </div>
                <div className="w-full mb-4">
                    <Googlelogincomponent changeLoginValue = {props.changeLoginValue} />

                </div>
                <div className='mt-4'>
                    <button className='w-full bg-white text-black border border-gray-300 py-3 rounded-md hover:bg-gray-100 cursor-pointer'>Sign Up with Email</button>

                </div>
            </div>
            <p className='mt-4 mb-10'>Already have an account? <Link to={"/signin"} className='text-orange-500 cursor-pointer hover:underline'>Sign In</Link></p>
            <ToastContainer />
        </div>
    )
}

export default Signup
