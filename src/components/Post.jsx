import React from 'react';
import './post.css'
const Post = ({ text }) => {
    return (
        <div className='postitem'>
            <div className='userInfo'>
                <div className='img'>
                </div>
                <div className='useName'>
                    {text}
                </div>
            </div>

        </div>
    );
}

export default Post;
