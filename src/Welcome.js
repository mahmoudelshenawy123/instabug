import React, { useState } from 'react'

function Welcome() {
  const [email,setEmail] =useState('ali@ali.com')
  return (
    <section className='welcome'>
      <div className='welcome__cont'>
        <h1 className='welcome__heading'>Welcome {email}</h1>
        <button className='welcome__log-out'>LogOut</button>
      </div>
    </section>
  )
}

export default Welcome