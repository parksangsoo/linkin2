import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';

const Feed = () => {
    return(
        <div className="feed">
            <div className="feedinput">
                <div className="inputbox">
                    <CreateIcon />
                    <input type="text"/>
                </div>
                <div className="inputoption">

                </div>
            </div>

            <div className="feedlist">

            </div>
        </div>
        
    );
};

export default Feed;