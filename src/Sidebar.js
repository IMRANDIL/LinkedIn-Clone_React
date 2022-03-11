import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'










const Sidebar = () => {


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">

            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>

        </div>
    )







    return (
        <div className='sidebar'>

            <div className="sidebar__top">
                <img src="https://c8.alamy.com/comp/PF3NWT/desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wallpaper-by-computer-language-and-source-code-com-PF3NWT.jpg" alt="back-img" />
                <Avatar className='sidebar__avatar' />
                <h2>Ali Imran Adil</h2>
                <h4>Aliimranadil2@gmail.com</h4>
            </div>

            <div className="sidebar__stats">

                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views On Post</p>
                    <p className="sidebar__statNumber">3,554</p>

                </div>
            </div>



            <div className="sidebar__bottom">


                <p>Recent</p>
                {recentItem('Reactjs')}
                {recentItem('Programing')}
                {recentItem('Software Development')}
                {recentItem('JavaScript')}
                {recentItem('Nodejs')}

            </div>

        </div>
    )
}

export default Sidebar