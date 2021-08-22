import React, { useState } from 'react'
import './Login.css'
import { axios } from '../../../axios'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
      await axios.post('/api/v1/authentication/login', {
        username, password
      })
      window.location='/'
    }

    return (
      <div>
        This is Login Page
        <form>
          <div>
            <label>Username: </label>
            <input type='text' value={username} onChange={changeUsername} />
          </div>
          <div>
            <label>Password: </label>
            <input type='password' value={password} onChange={changePassword} />
          </div>
        </form>
        <a href='/'></a>
        <button type='button' onClick={handleSubmit}>
          Submit
        </button>
        <button>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    )
}

export default Login
