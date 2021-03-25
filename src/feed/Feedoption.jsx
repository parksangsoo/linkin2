import React from 'react';
import './Feedoption.css';


const FeedOption = ({Icon, title, color}) => {
    return(
        <div className="feedoption">
            {<Icon style={{color: color}}/>}
            <h2 className="feedoptiontitle">{title}</h2>
        </div>
        
    );
};

export default FeedOption;