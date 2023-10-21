import React,
{ useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';
import { BsTwitter } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LuMessagesSquare } from 'react-icons/lu'
import { GoChecklist } from 'react-icons/go'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { TbUsers } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { CgMoreO } from 'react-icons/cg'
import { RiMoreFill } from 'react-icons/ri'


const NavBar = ({ openModal }) => {
    const [err, setErr] = useState(false)
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser)
    const navigate = useNavigate();
    const signOut = async (e) => {
        try {
            await signOut(auth)
            navigate('login')
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className='navbar'>
            <div className='nav'>
                <div className='nav-items'>
                    <div className='nav-item '>
                        <BsTwitter />
                    </div>
                    <div className='nav-item'>
                        <AiFillHome />
                        <span>
                            <Link to='/'>
                                Home
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <BsSearch />
                        <span>
                            <Link to='*'>
                                Explore
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <IoNotificationsOutline />
                        <span>
                            <Link to='*'>
                                Notification
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <LuMessagesSquare />
                        <span>
                            <Link to='*'>
                                Messages
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <GoChecklist />
                        <span>
                            <Link to='*'>
                                Lists
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <BsFillBookmarksFill />
                        <span>
                            <Link to='*'>
                                Bookmarks
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <TbUsers />
                        <span>
                            <Link to='*'>
                                Communities
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <BiUser />
                        <span>
                            <Link to={`/${currentUser.displayName}`}>
                                Profile
                            </Link>
                        </span>
                    </div>
                    <div className='nav-item'>
                        <span>
                            <CgMoreO />
                            <Link to='*'>
                                More
                            </Link>
                        </span>
                    </div>
                    <button onClick={() => openModal()}>Tweet</button>
                </div>
                <div className='accountMenu'>
                    <div className='accountMenu__currentUser-img'>
                        <img src={currentUser.photoURL} alt="" />
                    </div>
                    <div className='accoutnMenu__currentUser-UserName'>
                        @{currentUser.displayName}
                    </div>
                    <div className='accountMenu-signOut'>
                        <RiMoreFill onClick={() => signOut()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
