import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { AuthContext } from '../context/AuthContext';
import { PostContext } from '../context/PostContext';
import {
    arrayUnion,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    Timestamp,
    getDoc,
} from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import './postform.css'

const PostForm = ({ setIsOpen }) => {
    const [err, setErr] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);
    const { data } = useContext(PostContext);


    const handleSend = async (e) => {
        try {
            const res = await getDoc(doc(db, 'posts', data.postId));
            if (!res.exists()) {
                await setDoc(doc(db, 'posts', data.postId), { messages: [] });
            }

            if (img) {
                const storageRef = ref(storage, uuid());
                const uploadTask = uploadBytesResumable(storageRef, img);

                uploadTask.on(
                    (error) => {
                        //TODO:Handle Error
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            await updateDoc(doc(db, 'posts', data.postId), {
                                messages: arrayUnion({
                                    id: uuid(),
                                    text,
                                    senderId: currentUser.uid,
                                    senderName: currentUser.displayName,
                                    senderImg: currentUser.photoURL,
                                    date: Timestamp.now(),
                                    img: downloadURL,
                                }),
                            });
                        });
                    }
                );
            } else {
                await updateDoc(doc(db, 'posts', data.postId), {
                    messages: arrayUnion({
                        id: uuid(),
                        text,
                        senderId: currentUser.uid,
                        senderName: currentUser.displayName,
                        senderImg: currentUser.photoURL,
                        date: Timestamp.now(),
                    }),
                });
            }
            await updateDoc(doc(db, 'usersPosts', currentUser.uid), {
                [data.postId + '.lastPost']: {
                    text,
                },
                [data.postId + '.date']: serverTimestamp(),
            });

            await updateDoc(doc(db, 'usersPosts', data.user.uid), {
                [data.postId + '.lastPost']: {
                    text,
                },
                [data.postId + '.date']: serverTimestamp(),
            });
        } catch (err) {
            setErr(true)
        }
        setText('');
        setImg(null);
        setIsOpen(false);
    };
    return (
        <div className='postform'>
            <div className='form'>

                <div className='form-btn'>
                    <div className='close-btn'>
                        <AiOutlineClose onClick={() => setIsOpen(false)} />
                    </div>

                </div>
                <input value={text} onChange={(e) => setText(e.target.value)} className='userText' type="text" placeholder='Type massege...' />
                <input onChange={(e) => setImg(e.target.files[0])} type="file" />
                <button onClick={() => handleSend()} className='formPostbtn' type='submit'>Post</button>
            </div>
        </div>
    );
}

export default PostForm;
