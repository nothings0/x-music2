import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {loginUser} from '../redux/apiRequest'

const Auth = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      userName : username,
      password : password
    };
    loginUser(newUser, dispatch, navigate)
  }


  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
            <h3>login</h3>
            <input type="text" name='name' placeholder='enter your username' className='box' onChange={e => setUsername(e.target.value)}/>
            <input type="password" name='password' placeholder='enter your password' className='box' onChange={e => setPassword(e.target.value)}/>
            <button className="btn">login</button>
            <p>Don't have an account?<Link to='/register'> register now</Link></p>
        </form>
    </div>
  )
}

export default Auth