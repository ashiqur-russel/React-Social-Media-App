import React from 'react';
import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Wastebook</h3>
                    <span className='loginDesc'>Connect with more people in wastebook and waste your more time</span>
                </div>

                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder='Username' className='loginInput' />
                        <input type="text" placeholder='Email' className='loginInput' />
                        <input type="password" placeholder='Password' className='loginInput' />
                        <input type="password" placeholder='Password Again' className='loginInput' />

                        <button className='loginButton'>Sign Up</button>
                        <button className='loginRegisterButton'>Log into Account</button>

                    </div>
                </div>
            </div>
        </div>

    );
}
