<div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className='login rounded'>
        <h2 className='mb-3'>Enter login details</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-4'>
            <label htmlFor='email' className='form-label' >Email address </label>
            <input type="email" id="email" value={email} className='form-control'
              onChange={handleEmailChange} placeholder='Enter email' required autoFocus />
            {isEmailValid ? null : <p className='alert alert-danger'>Please enter a valid email</p>}
          </div>
          <div className='form-group mb-4'>
            <label htmlFor='password' className='form-label'>Password </label>
            <input type="password" id="password" value={password} className='form-control'
              onChange={handlePasswordChange} placeholder='Enter password' required />
            {isPasswordValid ? null : <p className='alert alert-danger'>Password must be at least 8 characters</p>}
          </div>
          {/* <div className='form-group mb-4'>
            <label htmlFor='confirm_password' className='form-label'>Confirm password </label>
            <input type="password" id="confirm_password" value={confirmPassword} className='form-control'
              onChange={(event) => setConfirmPassword(event.target.value)}
              onBlur={() => {
                if (password !== confirmPassword) setErrors({ confirmPassword: 'Passwords must be matched' });
                else setErrors({});
              }} placeholder='Re-enter password' required />
            {errors.confirmPassword && (<p className='alert alert-danger' role='alert'>{errors.confirmPassword}</p>)}
          </div> */}
          <div className='form-group form-check mb-4'>
            <input type="checkbox" className='form-check-input' />
            <label htmlFor='check' className='form-check-label'>Remeber login</label>
          </div>
          <button type="submit" className="btn btn-success mt-2" disabled={!isEmailValid || !isPasswordValid}>Sign-in</button>
        </form>
      </div>
    </div>