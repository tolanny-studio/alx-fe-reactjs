import React from 'react'
import UserInfo from './UserInfo'


const ProfilePage = ({userData}) => {
  console.log(userData);
  
  return (
    <UserInfo userData={userData}/>
  )
}

export default ProfilePage