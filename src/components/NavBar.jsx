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
        <div className='d-flex flex-column justify-content-around vh-100 '>
            <nav className='navbar d-flex flex-column '>
                <a className="navbar-brand align-items-start" href="#">
                    <BsTwitter />
                </a>
                <ul className="nav flex-column">
                    <li className="nav-item d-flex align-items-center" >
                        <AiFillHome />
                        <Link to='/' className="nav-link active" href="#">Home</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <BsSearch />
                        <a className="nav-link" href="#">Explore</a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <IoNotificationsOutline />
                        <a className="nav-link" href="#">Notification</a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <LuMessagesSquare />
                        <a className="nav-link" href="#">Messages</a>
                    </li>
                    <li className="nav-item d-flex align-items-center" >
                        <GoChecklist />
                        <a className="nav-link active" href="#">List</a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <TbUsers />
                        <a className="nav-link" href="#">Communities</a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <BiUser />
                        <Link to={`/${currentUser.displayName}`} className="nav-link" href="#">Profile</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <GoChecklist />
                        <a className="nav-link" href="#">More</a>
                    </li>
                </ul>
            </nav>
            <div className='col mt-4 mb-3'>
                <button className='btn btn-primary' onClick={() => openModal()}>Tweet</button>
            </div>
            <div className='card mb-5 '>
                <div className='card-body d-flex align-items-center justify-content-beetwen'>
                    <div className='img-users'>
                        <Link to={`/${currentUser.displayName}`}>
                            <img src={currentUser.photoURL} className="img-thumbnail" alt="..." />
                        </Link>
                    </div>
                    <div className='user-name'>
                        @{currentUser.displayName}
                    </div>
                    <div className='signOut'>
                        <RiMoreFill onClick={() => signOut()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
