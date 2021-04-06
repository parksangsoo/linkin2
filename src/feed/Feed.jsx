import React,{ useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from '../inputoption/Inputoption';
import Post from '../post/Post';
import { db } from '..firebase/firebase';
import firebase from 'firebase';


const Feed = () => {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        

        db.collection('posts').add({
            name: 'name',
            description: 'des',
            message: input,
            photoUrl: 'photo',
            timestamp: firebase.firestore.FieldValue.servserTimestamp(),
            
        });

        setInput('');
    };

    return(
        <div className="feed">
            <div className="feedinput">
                <div className="inputbox">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
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