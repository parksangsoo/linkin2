import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from '../inputoption/Inputoption';
import ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon  from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({ name, description, message, photoUrl }) => {
    return(
        <div className="post">
            <div className="postheader">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="postinfo">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="messagebox">
                <p>{message}</p>
            </div>

            <div className="postbuttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
};

export default Post;