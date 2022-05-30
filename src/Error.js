import React from 'react'
import illustration from './assets/imgs/illustartion.PNG'
function Error() {
  return (
    <section className='error'>
        <div className='error__cont'>
            <img src={illustration} alt="error image"/>
            <h1 className='error__heading'>
                404 - Page Not Foumd
            </h1>
            <p className='error__para'>
                Sorry, thar page doesn't exist. What would you like to do?
            </p>
        </div>
    </section>
  )
}

export default Error