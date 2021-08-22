import React, { useState } from 'react'
import './Register.css'
import { axios } from '../../../axios'
import { Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async () => {
    await axios.post('/api/v1/authentication/register', { username, password}).then((res) => console.log(res))
  }

  return (
    <div>
      This is Register Page
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
      <Link to='/login'>
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </Link>

    </div>
  )
}

export default Register
