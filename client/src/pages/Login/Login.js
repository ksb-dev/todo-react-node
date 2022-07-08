import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Hooks
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  const { error, setError, isPending, login } = useLogin()

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password, setEmail, setPassword)
  }

  return (
    <div onSubmit={handleSubmit} className='login'>
      <div className='login__inner'>
        <Link to='/' className='login__inner__backBtn'>
          <i className='fa-solid fa-arrow-left'></i>back
        </Link>

        <form className='login__inner__form'>
          <h3>Login</h3>

          <p>username</p>
          <input
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <div>
            <p>password</p>
            {password && !show && (
              <i
                className='fa-regular fa-eye'
                onClick={() => setShow(!show)}
              ></i>
            )}

            {password && show && (
              <i
                className='fa-regular fa-eye-slash'
                onClick={() => setShow(!show)}
              ></i>
            )}
          </div>

          <input
            type={show ? 'text' : 'password'}
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          {!isPending && <button type='submit'>Login</button>}

          {isPending && <button type='submit'>...</button>}

          <p className='ask'>
            Don't have an account? <Link to='/signup'>Signup</Link>
          </p>

          {error && (
            <h4
              className='login__inner__form-error'
              style={{
                color: 'tomato',
                fontWeight: '500'
              }}
            >
              {error}
            </h4>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
