import React, { useState } from 'react'
import LinkedIn from '../src/images/img21.png';
import { auth } from './firebase';
import './Login.css'










const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');







    const register = () => {



    }


    const login = (e) => {
        e.preventDefault()




    }



    return (
        <div className='login'>

            <img src={LinkedIn} alt="linkedin-img" />
            <form>

                <input type="text" placeholder='Full name (required if registering)' />
                <input type="text" placeholder='Profile picUrl (optional)' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='submit' onClick={login}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login