import React,{useContext} from 'react'
import UserContext from './context/UserContext'
import { Context } from './context/UserContext'


const UserDetails = () => {

  const userData = useContext(Context)
  console.log(userData);
  
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  )
}

export default UserDetails