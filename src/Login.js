import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import LinkedIn from '../src/images/img21.png';
import { auth } from './firebase';
import './Login.css';
import { login } from './features/userSlice';










const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('')


    const dispatch = useDispatch()




    const register = () => {
        if (!name) {
            return alert('Please Enter a Full Name')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch((err) => alert(err))


    }


    const handleLogin = (e) => {
        e.preventDefault()




    }



    return (
        <div className='login'>

            <img src={LinkedIn} alt="linkedin-img" />
            <form>

                <input type="text" placeholder='Full name (required if registering)' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Profile picUrl (optional)' value={profilePic} onChange={e => setProfilePic(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={handleLogin}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login