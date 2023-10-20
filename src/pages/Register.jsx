import React,
{ useState } from 'react';
import {
    auth,
    storage,
    db
} from '../firebase';
import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import {
    getDownloadURL,
    ref,
    uploadBytesResumable
} from 'firebase/storage';
import { BsTwitter } from 'react-icons/bs'
import { doc, setDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'


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
            <div className='container'>
                <div className='logo-side'>
                    <BsTwitter />
                    <div className='logo-side-title'>
                        <p>
                            Already have an account ?</p>
                    </div>
                    <div className='logo-side-button'>
                        <Link to='/login'>Log in</Link>
                    </div>
                </div>
                <div className='form-side'>
                    <div className='form-side__title'>
                        <h2>Join Twitter today and start exploring the world's thoughts.</h2>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="input-box">
                            <input type="text" required />
                            <label>Display Name</label>
                        </div>
                        <div className="input-box">
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
