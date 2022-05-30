import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from './auth'

function Welcome() {
  const navigate=useNavigate()
  const auth = useAuth()
  const logOut=()=>{
    auth.logout();
    navigate('/')
  }
  return (
    <section className='welcome'>
      <div className='welcome__cont'>
        <h1 className='welcome__heading'>Welcome {auth.user}</h1>
        <button className='welcome__log-out' onClick={logOut}>LogOut</button>
      </div>
    </section>
  )
}

export default Welcome