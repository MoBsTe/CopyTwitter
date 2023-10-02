import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import { signOut } from '@firebase/auth';
import { auth } from '../firebase';;


const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div>
            {currentUser.email}
            <button onClick={() => signOut(auth)}>LogOut</button>
            {currentUser.displayName}
        </div>
    );
}

export default Home;
