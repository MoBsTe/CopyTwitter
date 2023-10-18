import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';


const Post = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const ref = useRef();
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message])

    return (
        <div className='postitem'>
            <div className='userInfo'>
                <div className='userSender'>
                    <img src=
                        {message.senderImg} alt="" />
                </div>
                <div className='userSenderName'>
                    @{message.senderName}

                </div>
            </div>
            <div className='post-title'>
                {message.text}

            </div>
            {
                currentUser.uid === message.senderId &&
                <div> hello</div>
            }
        </div>
    );
}

export default Post;
