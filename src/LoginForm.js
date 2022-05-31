import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from './auth';

// import {ReactComponent as CloseIcon} from '../assets/imgs/closeIcon.svg'
import jsonData from './emails.json';
import LoginFormContent from './LoginFormContent';
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
    
    const auth = useAuth()

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
        // console.log(auth);
        if(loginIndex!=-1){
            auth.login(loginData.email)
            navigate('/Welcome' ,{replace:true})
            wrongEmailPassRef.current.classList.add('hidden')
        }else{
            wrongEmailPassRef.current.classList.remove('hidden')
        }
    }
  return (
    <div className='login__form'>
        <LoginFormContent/>
        <form onSubmit={(e)=>{SendData(e)}}>
            <div className='login__invalid-emai-password hidden' ref={wrongEmailPassRef} id=''>
                Your Email and/or password are incorrect
            </div>
            <div className='login__input-cont'>
                <div className='login__forget-cont'>
                    <label htmlFor='login__email' className='login__label'>Work Email</label>
                </div>
                <input type="email" name="email" id ='login__email' className='login__form-email login__form-input' ref={emailRef} onInput={(e)=>{addLoginData(e);checkValidEmail()}} placeholder='you@company.com'/>
                <label htmlFor='login__email' ref={emailLabelRef} className='login__input-eror hidden'>Enter a valid email address</label>
            </div>
            <div className='login__input-cont'>
                <div className='login__forget-cont'>
                    <label htmlFor='login__password' className='login__label'>Work Password</label>
                    <a href='#' className='login__forget'>Forget Password?</a>
                </div>
                <input type="password" name="password" id ='login__password' className='login__form-password login__form-input' ref={passwordRef} onInput={(e)=>{addLoginData(e);checkValidPassword()}} placeholder='6+ Characters'/>
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