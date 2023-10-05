import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './post.css'


const Post = ({ text }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className='postitem'>
            <div className='userInfo'>
                <div className='userSender'>
                    <img src={currentUser.photoURL} alt="" />
                </div>
                <div className='userSenderName'>
                    @{currentUser.displayName}
                </div>
            </div>
            <div className='post-title'>
                {text}
            </div>
        </div>
    );
}

export default Post;
