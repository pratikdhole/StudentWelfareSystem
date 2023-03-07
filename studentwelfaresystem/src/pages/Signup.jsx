import React, { useState } from 'react'
import '../assets/Form.scss'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState();
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [errors, setErrors] = useState({});

    let handleSubmit = (event) => {
        event.preventDefault();
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
        <div className='mt-4 mb-4 d-flex align-items-center justify-content-center w-100'>
            <div className='formstyle rounded'>
                <h2 className='mb-3'>Registration</h2>
                <form onSubmit={handleSubmit} className='row'>
                    <div className='col-md-6 text-start mt-3 mb-3'>
                        <label htmlFor='name' className='form-label' >User Name </label>
                        <input type="text" id="name" value={name} className='form-control'
                            onChange={(e) => setName(e.target.value)} placeholder='Enter name' required autoFocus />
                    </div>
                    <div className='col-md-6 text-start mt-3 mb-3'>
                        <label htmlFor='email' className='form-label' >Email address </label>
                        <input type="email" id="email" value={email} className='form-control'
                            onChange={handleEmailChange} placeholder='Enter email' required />
                        {isEmailValid ? null : <p className='alert alert-danger'>Please enter a valid email</p>}
                    </div>
                    <div className='col-md-6 text-start mt-3 mb-3'>
                        <label htmlFor='password' className='form-label'>Password </label>
                        <input type="password" id="password" value={password} className='form-control'
                            onChange={handlePasswordChange} placeholder='Enter password' required />
                        {isPasswordValid ? null : <p className='alert alert-danger'>Password must be at least 8 characters</p>}
                    </div>

                    <div className='col-md-6 text-start mt-3 mb-3 form-group'>
                        <label htmlFor='confirm_password' className='form-label'>Confirm password </label>
                        <input type="password" id="confirm_password" value={confirmPassword} className='form-control'
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            onBlur={() => {
                                if (password !== confirmPassword) setErrors({ confirmPassword: 'Passwords must be matched' });
                                else setErrors({});
                            }} placeholder='Re-enter password' required />
                        {errors.confirmPassword && (<p className='alert alert-danger' role='alert'>{errors.confirmPassword}</p>)}
                    </div>
                    <div className='col-md-6 text-start mt-3 mb-3 form-group'>
                        <label htmlFor='phone' className='form-label' >Mobile number </label>
                        <input type="tel" id="phone" value={phone} className='form-control'
                            onChange={(e) => setPhone(e.target.value)} placeholder='Enter mobile number' optional />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success mt-2" disabled={!isEmailValid || !isPasswordValid}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
