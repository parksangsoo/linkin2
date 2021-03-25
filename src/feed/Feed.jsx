import React,{ useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FeedOption from './Feedoption';
import Post from './Post';


const Feed = () => {

    const [posts,setPosts] = useState([
          {
            id: 1,
            name: 'name1', 
            description: 'des1', 
            message: 'mes1', 
            photoUrl: 'ph1'
          },
          {
            id: 2,
            name: 'name2', 
            description: 'des2', 
            message: 'mes2', 
            photoUrl: 'ph2'
          },
          {
            id: 3,
            name: 'name3', 
            description: 'des3', 
            message: 'mes3', 
            photoUrl: 'ph3'
          }
    ]);

    return(
        <div className="feed">
            <div className="feedinput">
                <div className="inputbox">
                    <form>
                        <CreateIcon />
                        <input type="text"/>
                    </form>
                </div>
                <div className="inputoption">
                    <FeedOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <FeedOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <FeedOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <FeedOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>

            <div className="feedlist">
                {posts.map((post) => (
                    <Post key={post.id} name={post.name} description={post.description} message={post.message} photoUrl={post.photoUrl}/>
                ))}
            </div>
        </div>
        
    );
};

export default Feed;