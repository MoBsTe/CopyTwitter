import PostItems from '../components/PostItems';
import NavBar from '../components/NavBar';
import Bar from '../components/Bar';
import React, {
    useState,
    useContext
} from 'react';
import { AuthContext } from '../context/AuthContext';
import PostForm from '../components/PostForm';
import {
    Routes,
    Route
} from 'react-router-dom';
import Profile from '../components/Profile';
import NoPage from '../components/NoPage';


const Home = () => {
    const { currentUser } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <div className='home'>
            <div className='navbarhome'>
                <NavBar openModal={openModal} />
            </div>
            <div className='post'>
                <Routes>
                    <Route path='*' element={<NoPage />} />
                    <Route path='/' element={<PostItems />} />
                    <Route path={`/${currentUser.displayName}`} element={<Profile currentUser={currentUser} />} />
                </Routes>
            </div>

            <div className='bar'>
                <Bar />
            </div>
            {isOpen &&
                <PostForm setIsOpen={setIsOpen} />
            }
        </div>
    );
}

export default Home;
