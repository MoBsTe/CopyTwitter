import React, { useState } from 'react';
import { auth, storage, db } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { BsTwitter } from 'react-icons/bs'
import { doc, setDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import logo from '../img/back-twitter 1.png'


const Register = () => {
    const [err, setErr] = useState(false);
    const handleRegister = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0]
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName, // displayName:displayName
                            email,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "usersPosts", res.user.uid), {})
                        e.target[0].value = '';
                        e.target[1].value = '';
                        e.target[2].value = '';
                        e.target[3].files[0] = null;
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                    }
                })
            })
            console.log(res);
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className='register'>
            <div className='main-img'>
                {/* <BsTwitter /> */}
                <img src={logo} alt="" />
            </div>
            <div className='main__right-side'>
                <div className='main__right-side-title'>
                    <h2>Register Twitter account</h2>
                </div>
                {/* <form onSubmit={handleRegister}>
                    <div className='register-container'>
                        <input type="text" />
                        <label>Display Name</label>
                    </div>
                    <div className='register-container'>
                        <input type="email" />
                        <label>Email</label>
                    </div>
                    <div className='register-container'>
                        <input type="password" />
                        <label>Password</label>
                    </div>
                    <input type="file" id="file" />
                    <button type='submit'>Sign Up</button>
                </form> */}
                <form >
                    <div className="input-box">
                        <input type="text" required />
                        <label>Username</label>
                    </div>

                    <div className="input-box">
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <input type="password" required />
                        <label>Password</label>
                    </div>

                    <button type="submit">Register</button>
                    <div className="login-register">
                        <span>Already have an account?<Link to="/login">Login</Link></span>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Register;
