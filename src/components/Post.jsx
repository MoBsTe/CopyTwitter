import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PostContext } from '../context/PostContext';
import './post.css'


const Post = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(PostContext);
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message])

    return (
        <div className='postitem'>
            <div className='userInfo'>
                <div className='userSender'>
                    <img src=
                        {message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />

                </div>
                <div className='userSenderName'>
                    @{message.senderId === currentUser.displayName ? currentUser.displayName : data.user.displayName}

                </div>
            </div>
            <div className='post-title'>
                {message.text}

            </div>
        </div>
    );
}

export default Post;
