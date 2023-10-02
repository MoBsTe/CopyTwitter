import React, { useState } from 'react';
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { auth } from '../firebase';
import './register.css';
const Register = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const handleRegister = (e) => {
        // e.preventDefault();
        const auth = getAuth();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {


            createUserWithEmailAndPassword(auth, email, password)
                .then(console.log)
                .catch(console.log)
            console.log(email)
            console.log(password)
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
                    {/* <input type="text" placeholder='Display Name' /> */}
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button type='submit'>Login</button>
                </form>
                <span>Already have an account?<Link to="/login">Login</Link></span>
            </div>
        </div>
    );
}

export default Register;
