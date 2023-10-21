import React from 'react';
import { BsCalendar2MinusFill } from 'react-icons/bs'

const Profile = ({ currentUser }) => {
    let creationTime = currentUser.metadata.creationTime.substring(5, 16);
    return (
        <div className='userProfile'>
            <div className='userProfile__header'>
                <div className='userProfile__header-img-container'>
                    <div className='userProfile__header-img-userImg'>
                        <img src={currentUser.photoURL} alt="" />
                    </div>
                </div>
            </div>
            <div className='userProfile__info'>
                <div className='userProfile__info-button'>
                    <button>Set up profile</button>
                </div>
                <div className='userProfile__info-userInfo'>
                    <div className='userProfile__userInfo-fullName'>
                    </div>
                    <div className='userProfile__info-userInfo-displayName'>
                        @{currentUser.displayName}
                    </div>
                    <div className='userProfile__info-userInfo-creationTime'>
                        <BsCalendar2MinusFill />
                        <span>
                            Joined
                        </span>
                        {creationTime}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
