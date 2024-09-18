// CreateAccount.jsx
import React from 'react';
import './register.css';

const CreateAccount = () => {
    return (
        <div className="create-account-container">
            <h1>Create Account</h1>
            <form className="create-account-form">
                <div className="name-inputs">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div className="password-options">
                    <button className="confirm-password-btn">Confirm Password</button>
                </div>
                <p>Or you can sign up with</p>
                <div className="social-signup-buttons">
                    <button className="social-btn"></button>
                    <button className="social-btn"></button>
                    <button className="social-btn"></button>
                    <button className="social-btn"></button>
                </div>
                <button className="confirm-btn">Confirm</button>
            </form>
        </div>
    );
}

export default CreateAccount;
