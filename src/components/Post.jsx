import React,
{
    useContext,
    useEffect,
    useRef
} from 'react';
import { AuthContext } from '../context/AuthContext';

const Post = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const ref = useRef();
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message])

    return (
        // <div className='postitem'>
        //     <div className='userInfo'>
        //         <div className='userSender'>
        //             <img src=
        //                 {message.senderImg} alt="" />
        //         </div>
        //         <div className='userSenderName'>
        //             @{message.senderName}
        //         </div>
        //     </div>
        //     <div className='post-title'>
        //         {message.text}
        //     </div>
        //     <div className='post-img'>
        //         <img src={message.img} alt="" />
        //     </div>
        //     {
        //         currentUser.uid === message.senderId &&
        //         <div> hello</div>
        //     }
        //     {/* <video src=""></video> */}
        // </div>
        <div className='card w-100'>
            <div className='card-body'>
                <div className='userInfo d-flex align-items-center'>
                    <div className='userSenderImg me-2'>
                        <img src={message.senderImg} alt="" />
                    </div>
                    <div className='userSenderName'>
                        @{message.senderName}
                    </div>
                </div>
                <div className='card-subtitle pt-3 pb-2'>
                    {message.text}
                </div>
                <div className='card-img d-flex justify-content-center'>
                    {message.img ?
                        <img src={message.img} alt="" /> :
                        ""
                    }
                </div>
            </div>
        </div>
    );
}

export default Post;
