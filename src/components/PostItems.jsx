import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from "../firebase";
import Post from './Post';
import { AuthContext } from '../context/AuthContext';
import { PostContext } from '../context/PostContext';


const PostItems = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(PostContext);
    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'posts', data.postId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        };
    }, [data.postId]);


    console.log(messages)
    const reversedMessages = [...messages].reverse();
    return (
        <div className='postlist'>
            Posts
            {reversedMessages.map((m) => (
                <Post message={m} key={m.id} />
            ))}
        </div>
    );
}

export default PostItems;
