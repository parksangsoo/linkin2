import React from 'react';
import './Sidebar.css';


const SideBar = () => {

    const recentItem = (topic) => (
        <div className="recentItem">
            <span className="hashtag">#</span>
            <p>{topic}</p>
        </div>
    )

    return(
        <div className="sidebar">
            <div className="sidebarup">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <h2>박상수</h2>
                <h4>asdf@gmail.com</h4>
            </div>

            <div className="sidebarmid">
                    <div className="option1">
                        <p>Who viewed you</p>
                        <p className="statnumber">2,543</p>
                    </div>
                    <div className="option1">
                        <p>Views on post</p>
                        <p className="statnumber">2,448</p>
                    </div>
            </div>

            <div className="sidebardown">
                <p>Recnet</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
        
    );
};

export default SideBar;