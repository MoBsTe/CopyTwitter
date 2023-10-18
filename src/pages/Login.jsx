import React, { useState } from 'react'
import { BsTwitter } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../img/back-twitter 1.png'

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
            console.log(auth)
        } catch (err) {
            setErr(true);
        }
    }
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (
        <div className='login'>
            <div className='main-img'>
                {/* <BsTwitter /> */}
                <img src={logo} alt="" />
            </div>
            <div className='main__right-side'>
                <div className='main__right-side-title'>
                    <h2>Login to Twitter account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" >Login</button>
                    <div className="login-register">
                        <span>Don't have an account?<Link to="/register">Sign up</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
