import React from 'react';
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Wastebook</h3>
                    <span className='loginDesc'>Connect with more people in wastebook and waste your more time</span>
                </div>

                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder='Email' className='loginInput' />
                        <input type="password" placeholder='Password' className='loginInput' />

                        <button className='loginButton'> Log In</button>
                        <span className='loginForgot'>Forgot password?</span>
                        <button className='loginRegisterButton'>Create a New Account</button>

                    </div>
                </div>
            </div>
        </div>

    );
}
