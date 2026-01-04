import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Googlelogincomponent = (props) => {

    const navigate = useNavigate();
    const handleOnSuccess = async (credentialResponse) => {
        // console.log(credentialResponse);

        const token = credentialResponse.credential;
        const res = await axios.post('http://localhost:3000/api/auth/google', { token }, { withCredentials: true })
        console.log(res)
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userInfo', JSON.stringify(res.data.user))
        props.changeLoginValue(true);
        navigate('/feed')
    }
    return (
        <div className='w-full'>
            <GoogleLogin
                onSuccess={(credentialResponse) => handleOnSuccess(credentialResponse)}
                
                
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default Googlelogincomponent
