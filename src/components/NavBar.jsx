import React, { useContext } from 'react';
import { BsTwitter } from 'react-icons/bs'
import { AuthContext } from '../context/AuthContext';
import { AiFillHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LuMessagesSquare } from 'react-icons/lu'
import { GoChecklist } from 'react-icons/go'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { TbUsers } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { CgMoreO } from 'react-icons/cg'
import { RiMoreFill } from 'react-icons/ri'
import { signOut } from '@firebase/auth';
import { auth } from '../firebase';
import './navbar.css'


const NavBar = ({ openModal }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className='container'>

                <div className='logo'>
                    <BsTwitter />
                </div>
                <div className='nav'>
                    <div className='nav-item'>
                        <AiFillHome />
                        <span>
                            Home
                        </span>
                    </div>
                    <div className='nav-item'>
                        <BsSearch />
                        <span>
                            Explore
                        </span>
                    </div>
                    <div className='nav-item'>
                        <IoNotificationsOutline />
                        <span>
                            Notifications
                        </span>
                    </div>
                    <div className='nav-item'>
                        <LuMessagesSquare />
                        <span>
                            Messages
                        </span>
                    </div>
                    <div className='nav-item'>
                        <GoChecklist />
                        <span>
                            Lists
                        </span>
                    </div>
                    <div className='nav-item'>
                        <BsFillBookmarksFill />
                        <span>
                            Bookmarks
                        </span>
                    </div>
                    <div className='nav-item'>
                        <TbUsers />
                        <span>
                            Communities
                        </span>
                    </div>
                    <div className='nav-item'>
                        <BiUser />
                        <span>
                            Profile
                        </span>
                    </div>
                    <div className='nav-item'>
                        <CgMoreO />
                        <span>
                            More
                        </span>
                    </div>
                    <div className='button-nav'>
                        <div className='bnt' onClick={() => openModal()}>Post</div>
                    </div>
                </div>
                <div className='user-info'>
                    <div className='user-info-conntainer'>
                        <div className='userImg'>
                            <img src={currentUser.photoURL} alt='' />
                        </div>
                        <div className='userName'>
                            @{currentUser.displayName}
                        </div>
                        <div className='userInfo-settings'>
                            <RiMoreFill onClick={() => signOut(auth)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
