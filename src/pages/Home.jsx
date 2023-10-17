import PostList from '../components/PostList';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';
import React, { useState } from 'react';
import './home.css'
import PostForm from '../components/PostForm';
import { Routes, Route } from 'react-router-dom';
import Profile from '../components/Profile';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <div className='home'>
            <div className='navbarhome'>
                <NavBar openModal={openModal} />
            </div>

            <div className='post'>
                <Routes>
                    <Route path='postsList' element={<PostList />} />
                    <Route path='profile' element={<Profile />} />
                </Routes>
            </div>

            <div className='bar'>
                <Bar />
            </div>
            {isOpen &&
                <PostForm setIsOpen={setIsOpen} />
            }
        </div>
    );
}

export default Home;
