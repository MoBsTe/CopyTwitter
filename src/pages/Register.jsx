import React, { useState } from 'react';
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import './register.css';
const Register = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        // const auth = getAuth();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try {
            const res = await
                createUserWithEmailAndPassword(auth, email, password)
            console.log(res)
            try {
                await updateProfile(res.user, {
                    displayName,
                })
            } catch (err) {
                console.log(err)
                setErr(true);
            }
        } catch (err) {
            setErr(true)
        }
    }

    return (
        <div className='register'>
            <div className='left-Logo'>
                <BsTwitter />
            </div>
            <div className='right-form'>
                <div className='title'>
                    <h2>Register Twitter account</h2>
                </div>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder='Display Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button type='submit'>Sign Up</button>
                </form>
                <span>Already have an account?<Link to="/login">Login</Link></span>
            </div>
        </div>
    );
}

export default Register;
