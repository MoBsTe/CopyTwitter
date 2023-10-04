import PostList from '../components/PostList';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';
import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import './home.css'



import { signOut } from '@firebase/auth';
import { auth } from '../firebase';;
const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className='home'>
            <div className='navbarhome'>
                <NavBar />
            </div>
            <div className='post'>
                <PostList />
            </div>
            <div className='bar'>

                <Bar />
            </div>
            {/* {currentUser.email}
            <button onClick={() => signOut(auth)}>LogOut</button>
            @{currentUser.displayName} */}
        </div>
    );
}

export default Home;
