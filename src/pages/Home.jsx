import PostItems from '../components/PostItems';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';
import React, {
    useContext, useEffect, useState
} from 'react';
import { PostContext } from '../context/PostContext';
import { AuthContext } from '../context/AuthContext';
import PostForm from '../components/PostForm';
import NoPage from '../components/NoPage'
import {
    Routes,
    Route
} from 'react-router-dom';
import Profile from '../components/Profile';
import { doc, onSnapshot } from 'firebase/firestore';
// import React, { useContext, useEffect, useState } from 'react';
import { db } from "../firebase";

const Home = () => {
    const { currentUser } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };


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
        <div className='container-fluid ' >
            <div className='row'>
                <div className='col d-flex justify-content-end'>
                    <NavBar openModal={openModal} />
                </div>
                <div className='col'>
                    <Routes>
                        <Route path='*' element={<NoPage />} />
                        <Route path='/' element={<PostItems reversedMessages={reversedMessages} />} />
                        <Route path={`/${currentUser.displayName}`} element={<Profile currentUser={currentUser} />} />
                    </Routes>
                </div>
                <div className='col d-flex justify-content-center'>
                    1
                </div>
            </div>
            {isOpen &&
                <PostForm setIsOpen={setIsOpen} />
            }
        </div>
    );
}

export default Home;
