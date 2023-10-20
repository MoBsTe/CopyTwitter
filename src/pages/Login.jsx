import React,
{ useState } from 'react'
import { BsTwitter } from 'react-icons/bs'
import {
    Link,
    useNavigate
} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

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
            <div className='container'>
                <div className='logo-side'>
                    <BsTwitter />
                    <div className='logo-side-title'>
                        <p>
                            Don't have an account?</p>
                    </div>
                    <div className='logo-side-button'>
                        <Link to='/register'>Sign up</Link>
                    </div>
                </div>
                <div className='form-side'>
                    <div className='form-side__title'>
                        <h2>Join Twitter today and start exploring the world's thoughts.</h2>
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
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
