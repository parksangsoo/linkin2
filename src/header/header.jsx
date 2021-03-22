import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './headeroption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisonAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return(
        <div className="header">
            <div className="headerleft">
                <img className="linkinicon" src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="sreach">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="headerright">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisonAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            </div>
        </div>
    );
};

export default Header;