import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import './postlist.css'


const PostList = () => {
    return (
        <div className='postlist'>
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
            <Post text='Hey every one, its my first post!' />
        </div>
    );
}

export default PostList;
