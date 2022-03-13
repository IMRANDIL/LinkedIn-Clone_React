import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import PhotoIcon from '@mui/icons-material/Photo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';









const Feed = () => {

    const [posts, setPost] = useState([]);
    const [input, setInput] = useState('');

    const user = useSelector(selectUser)


    useEffect(() => {

        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()

                }
            )))
        })






    }, [])





    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('')


    }





    return (
        <div className='feed'>

            <div className="feed__inputContainer">

                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button type='submit' onClick={sendPost}>Send</button>

                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={PhotoIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
                </div>
            </div>

            {/* Posts */}

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    photoUrl={photoUrl}
                    description={description}
                    message={message}

                />

            ))}




        </div>
    )
}

export default Feed