import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="headerleft">
                <img className="linkinicon" src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="sreach">
                    <input type="text"/>
                </div>
            </div>
            <div className="headerright">

            </div>
        </div>
    );
};

export default Header;