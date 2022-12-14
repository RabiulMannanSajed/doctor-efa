import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [agree, setAgree] = useState(false);

    // //email signup system from react firebase hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // this is for const (update Profile) from react firebase hooks
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {

    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');


    }
    return (
        <div className='register-form'>
            <h2 className='text-center mt-4'> Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <input type="password" name="password" id="" placeholder='Your Password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 m-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms">Accept Terms and Condition</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto d-block m-2'
                    type="submit"
                    value="Register"
                />
            </form>
            <p>Already have an account? <Link to='/login' className=' text-decoration-none text-primary pe-auto' onClick={navigateLogin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;