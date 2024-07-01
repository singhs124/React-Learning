import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const {setUser}  = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <>
    <input 
    type="text"
     placeholder='username'
     value={username}
     onChange={(e)=>setusername(e.target.value)}
    />
    <input type="text"
    placeholder='password' 
    value={password}
    onChange={(e)=>setpassword(e.target.value)}
    />
    <button type="submit" onClick={handleSubmit}>
        Submit
    </button>
    </>
  )
}

export default Login