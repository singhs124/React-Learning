import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)

  if(user) return <div>Welcome {user.username}</div>
  if(!user) return <div>Please Login!</div>
}

export default Profile