import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css'
const SocialLogin = () => {

    // this is for Google
    const [signInWithGoogle, userGoogle, loading, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    // set error for google sign in
    let errorElement;
    if (errorGoogle) {
        errorElement = <p className='text-danger'>Error: {errorGoogle?.message} </p>
    }
    if (userGoogle) {
        navigate('/home');
    }
    return (
        <div>
            <div className='socialLogin-div'>
                <div className='hr-line' ></div>
                <p className='mt-2 px-2'>or</p>
                <div className='hr-line' ></div>
            </div>
            {errorElement}
            <div>
                {/* button for google */}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    {/* <img style={{ width: '30px' }} src={google} alt="" /> */}
                    <span>Google Sign In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;