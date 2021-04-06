import React,{ useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from '../inputoption/Inputoption';
import Post from '../post/Post';


const Feed = () => {

    const [posts,setPosts] = useState([
          {
            id: 1,
            name: 'name1', 
            description: 'des1', 
            message: 'mes1',
            photoUrl: 'A'
          },
          {
            id: 2,
            name: 'name2', 
            description: 'des2', 
            message: 'mes2',
            photoUrl: 'B'
          },
          {
            id: 3,
            name: 'name3', 
            description: 'des3', 
            message: 'mes3',
            photoUrl: 'C'
          }
    ]);

    const sendPost = (e) => {
        e.preventDefault();
    };

    return(
        <div className="feed">
            <div className="feedinput">
                <div className="inputbox">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="inputoptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            <div>
                {posts.map((post) => (
                    <Post key={post.id} name={post.name} description={post.description} message={post.message} photoUrl={post.photoUrl} />
                ))}
            </div>
        </div>
        
    );
};

export default Feed;