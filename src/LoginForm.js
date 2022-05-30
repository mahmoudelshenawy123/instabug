import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import {ReactComponent as LogoSvg} from './assets/imgs/instaLogo.svg'
import {ReactComponent as MicrosoftSvg} from './assets/imgs/Microsoft.svg'
import {ReactComponent as GoogleSvg} from './assets/imgs/google.svg'
import {ReactComponent as GithubSvg} from './assets/imgs/github.svg'
// import {ReactComponent as CloseIcon} from '../assets/imgs/closeIcon.svg'
import jsonData from './emails.json';
function LoginForm() {
    let navigate =useNavigate()
    const [loginData ,setLoginData] =useState({email:null,password:null})
    const emailReg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}.com');
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordLabelRef = useRef(null)
    const emailLabelRef = useRef(null)
    const submitButtonRef=useRef(null)

    const wrongEmailPassRef=useRef(null)
    
    const addLoginData =(e)=>{
        setLoginData((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
        if(emailReg.test(emailRef.current.value) &&passwordRef.current.value.length >5){
            submitButtonRef.current.removeAttribute('disabled')
            submitButtonRef.current.classList.remove('disabled')
        }else{
            submitButtonRef.current.setAttribute('disabled',true)
            submitButtonRef.current.classList.add('disabled')

        }
    }
    const checkValidEmail =()=>{
        if(emailReg.test(emailRef.current.value)){
            emailRef.current.classList.remove('invalid')
            emailLabelRef.current.classList.add('hidden')
        }else{
            emailRef.current.classList.add('invalid')
            emailLabelRef.current.classList.remove('hidden')
        }
    }
    const checkValidPassword =()=>{        
        if(passwordRef.current.value.length <6){
            passwordRef.current.classList.add('invalid')
            passwordLabelRef.current.classList.remove('hidden')
        }else{
            passwordRef.current.classList.remove('invalid')
            passwordLabelRef.current.classList.add('hidden')
        }
    }
    const SendData=(e)=>{
        e.preventDefault();
        let loginIndex=jsonData.findIndex(val=>{
            if(val.email ==emailRef.current.value &&val.password ==passwordRef.current.value){
                return true;
            }
        })

        if(loginIndex!=-1){
            navigate('/Welcome')
            wrongEmailPassRef.current.classList.add('hidden')
        }else{
            wrongEmailPassRef.current.classList.remove('hidden')
        }
        console.log(jsonData)
        console.log(loginIndex)
    }
  return (
    <div className='login__form'>
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
        <div className='login__invalid-emai-password hidden' ref={wrongEmailPassRef}>
            Your Email and/or password are incorrect
        </div>
        <form onSubmit={(e)=>{SendData(e)}}>
            <div className='login__input-cont'>
                <div className='login__forget-cont'>
                    <label htmlFor='login__email' className='login__label'>Work Email</label>
                </div>
                <input type="email" name="email" id ='login__email' className='login__form-email login__form-input' ref={emailRef} onInput={(e)=>{addLoginData(e);checkValidEmail()}} placeholder='you@company.com'/>
                <label htmlFor='login__password' ref={emailLabelRef} className='login__input-eror hidden'>Enter a valid email address</label>
            </div>
            <div className='login__input-cont'>
                <div className='login__forget-cont'>
                    <label htmlFor='login__password' className='login__label'>Work Password</label>
                    <a href='' className='login__forget'>Forget Password?</a>
                </div>
                <input type="password" name="password" id ='login__password' className='login__form-password login__form-input' ref={passwordRef} onInput={(e)=>{addLoginData(e);checkValidPassword()}} placeholder='8+ Characters'/>
                <label htmlFor='login__password' ref={passwordLabelRef} className='login__input-eror hidden'>Password must be 6 characters or more</label>
            </div>
            <button type='submit' className='login__submit disabled' ref={submitButtonRef} disabled>Log in</button>
        </form>
        <div className='login__sign-up-cont'>
            <p className='login__sign-up-para'>Don't have an account?<a href="#" className='login__sign-up'> Sign Up</a></p>
            <a href='#' className='login__sso'>Login via SSO</a>
        </div>
        <div className='login__trusted'>
            Trusted by the top companies
        </div>

    </div>
)
}

export default LoginForm