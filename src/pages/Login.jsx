import React, { useState } from 'react'
import { BsTwitter } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './login.css'


const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('home')
            console.log(auth)
        } catch (err) {
            setErr(true);
        }
    }
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (

        <div className='login'>
            <div className='left-Logo'>
                <BsTwitter />
            </div>
            <div className='right-form'>
                <div className='title'>
                    <h2>Login to Twitter account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Password' />
                    <button type='submit'>Login</button>
                    {err && <span>Somthing went wrong</span>}
                </form>
                <span>Don't have an account?<Link to="/register">Sign up</Link></span>
            </div>
        </div>
    );
}

export default Login;
