import React from 'react';
import './headeroption.css';


const HeaderOption = ({Icon, title}) => {
    return(
        <div className="headeroption">
            {<Icon className="headeroptionicon"/>}
            <h2 className="headeroptiontitle">{title}</h2>
        </div>
        
    );
};

export default HeaderOption;