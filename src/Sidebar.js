import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'






const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Ali Imran</h2>
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


            </div>

        </div>
    )
}

export default Sidebar