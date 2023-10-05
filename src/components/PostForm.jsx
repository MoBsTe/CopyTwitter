import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import './postform.css'
const PostForm = ({ setIsOpen }) => {
    return (
        <div className='postform'>
            <form>
                <div className='form-btn'>
                    <div className='close-btn'>
                        <AiOutlineClose onClick={() => setIsOpen(false)} />
                    </div>

                </div>
                <input className='userText' type="text" placeholder='Type massege...' />
                <input type="file" />
                <button className='formPostbtn' type='submit'>Post</button>
            </form>
        </div>
    );
}

export default PostForm;
