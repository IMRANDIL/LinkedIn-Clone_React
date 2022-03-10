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




const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src={LinkedIn} alt="linkedin-img" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>



            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar='https://avatars.githubusercontent.com/u/71559091?s=400&u=261c7198a75f868c1d0c5deda860c96ad06d8820&v=4' title='me' />

            </div>

        </div>
    )
}

export default Header