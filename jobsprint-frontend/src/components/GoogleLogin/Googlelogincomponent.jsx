import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const Googlelogincomponent = () => {
    const handleOnSuccess = (credentialResponse) => {
        console.log(credentialResponse);
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
