import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/apiRequest'

const Register = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            userName : userName,
            email : email,
            password : password
        }
        registerUser(newUser, dispatch, navigate)
    }
  return (
    <div className="register">
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <input type="text" name='name' placeholder='enter your username' className='box' onChange={e => setUserName(e.target.value)}/>
            <input type="email" name='email' placeholder='enter your email' className='box' onChange={e => setEmail(e.target.value)}/>
            <input type="password" name='password' placeholder='enter your password' className='box' onChange={e => setPassword(e.target.value)}/>
            {/* <input type="password" name='cpassword' placeholder='enter your password' className='box'/> */}
            <button className="btn">register now</button>
            <p>already have an accout ?<Link to='/login'>  login now</Link></p>
        </form>
    </div>
  )
}

export default Register