import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LinkedIn from '../src/images/linkedin.svg';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';




const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch()


    const Logout = () => {
        dispatch(logout());
        auth.signOut()
    }



    return (
        <div className='header'>
            <div className="header__left">
                <img src={LinkedIn} alt="linkedin-img" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>



            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                {user && (
                    <HeaderOption avatar={user.photoUrl} title={user.displayName}
                        onClick={Logout}

                    />
                )}


            </div>

        </div>
    )
}

export default Header