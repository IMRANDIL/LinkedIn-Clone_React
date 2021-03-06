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
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';




const Header = () => {


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

                <HeaderOption avatar={true} title='me'
                    onClick={Logout}

                />



            </div>

        </div>
    )
}

export default Header