import React from 'react';
import './Inputoption.css';

const Inputoption = ({Icon, title, color}) => {
    return(
        <div className="inputoption">
            {<Icon style={{color: color}}/>}
            <h2 className="inputoptiontitle">{title}</h2>
        </div>
    )
};

export default Inputoption;