import React from 'react'
import LinkedIn from '../src/images/img21.png';
import './Login.css'





const Login = () => {
    return (
        <div className='login'>

            <img src={LinkedIn} alt="linkedin-img" />
            <form>

                <input type="text" placeholder='Full name (required if registering)' />
            </form>
        </div>
    )
}

export default Login