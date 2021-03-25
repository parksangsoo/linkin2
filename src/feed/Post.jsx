import React from 'react';
import './Post.css';

const Post = ({ name }) => {
    return(
        <div className="post">
            <p>{name}</p>
        </div>
    )
};

export default Post;