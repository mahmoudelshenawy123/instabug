import React from 'react'
import {ReactComponent as LogoSvg} from './assets/imgs/instaLogo.svg'
import {ReactComponent as MicrosoftSvg} from './assets/imgs/Microsoft.svg'
import {ReactComponent as GoogleSvg} from './assets/imgs/google.svg'
import {ReactComponent as GithubSvg} from './assets/imgs/github.svg'
function LoginFormContent() {
    
  return (
    <>
        <div className='login__logo-cont'>
            <LogoSvg> </LogoSvg>
        </div>
        <h1 className='login__heading'>Log in To Instabug</h1>
        <div className='login__links-cont'>
            <a href='#' className='login__links login__links--google'><GoogleSvg className='login__links-svg login__links-svg--bg-white'/><span className='login__links-span'>Google</span></a>
            <a href='#' className='login__links login__links--GitHub'><GithubSvg className='login__links-svg'/><span className='login__links-span'>GitHub</span></a>
            <a href='#' className='login__links login__links--Micrsoft'><MicrosoftSvg className='login__links-svg'/><span className='login__links-span'>Micrsoft</span></a>
        </div>
        <div className='login__OR'>OR</div>
        
    </>
  )
}

export default LoginFormContent