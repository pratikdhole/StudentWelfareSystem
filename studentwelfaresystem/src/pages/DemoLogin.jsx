import { useState } from "react";
import React from "react"

export default function (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        const passwordValue = event.target.value;
        setPassword(passwordValue);

        if (passwordValue.length >= 8) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    };

    let handleEmailChange = (event) => {
        const emailValue = event.target.value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
        setEmail(emailValue);

        if (emailPattern.test(emailValue)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
    }

    let handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);

        if (passwordValue.length >= 8) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }

    return (
        <div className="form-container">
            <form className="form">
                <div className="form-content">
                    <h3 className="form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={handleEmailChange}
                        />
                        {isEmailValid ? null : <p className='alert alert-danger'>Please enter a valid email</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={handlePasswordChange}
                        />
                        {isPasswordValid ? null : <p className='alert alert-danger'>Password must be at least 8 characters</p>}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-success" disabled={!isEmailValid || !isPasswordValid}>
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        <a href="#">Forgot password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}