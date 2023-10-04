import PostList from '../components/PostList';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';
import React from 'react';
import './home.css'


const Home = () => {
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
        </div>
    );
}

export default Home;
