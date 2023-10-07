import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from "../firebase";
import Post from './Post';
import { AuthContext } from '../context/AuthContext';
import { PostContext } from '../context/PostContext';
import './postlist.css'


const PostList = () => {
    const [posts, setPosts] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(PostContext)
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


    useEffect(() => {
        const getPosts = () => {
            const unsub = onSnapshot(doc(db, 'usersPosts', currentUser.uid), (doc) => {
                console.log(doc);
                setPosts(doc.data());
            })
            return () => {
                unsub();
            };
        };
        currentUser.uid && getPosts();
    }, [currentUser.uid]);


    console.log(messages)

    return (
        <div className='postlist'>
            {messages.map((m) => (
                <Post message={m} key={m.id} />
            ))}

        </div>
    );
}

export default PostList;
