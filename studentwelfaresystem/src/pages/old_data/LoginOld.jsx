import React, { useState } from 'react'
import '../assets/Form.scss'

function Login() {
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
    <div className='d-flex align-items-center justify-content-center w-100'>
      <div className='formstyle rounded'>
        <h2 className='mb-3'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label' >Email address </label>
            <input type="email" id="email" value={email} className='form-control'
              onChange={handleEmailChange} placeholder='Enter email' required autoFocus />
            {isEmailValid ? null : <p className='alert alert-danger'>Please enter a valid email</p>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password </label>
            <input type="password" id="password" value={password} className='form-control'
              onChange={handlePasswordChange} placeholder='Enter password' required />
            {isPasswordValid ? null : <p className='alert alert-danger'>Password must be at least 8 characters</p>}
          </div>
          <div className='mb-3 form-check'>
            <input type="checkbox" className='form-check-input' />
            <label htmlFor='check' className='form-check-label'>Remeber login</label>
          </div>
          <button type="submit" className="btn btn-success mt-2" disabled={!isEmailValid || !isPasswordValid}>Sign-in</button>
        </form>
      </div>
    </div>
  )
}

export default Login