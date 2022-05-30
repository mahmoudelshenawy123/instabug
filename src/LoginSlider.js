import React, { useEffect } from 'react'
import  slider  from './assets/imgs/1.png';
import  slider1  from './assets/imgs/2.png';
import  slider2  from './assets/imgs/3.png';

function LoginSlider() {
    const changeSliderImg = ()=>{
        let sliderImgs = document.querySelectorAll('.login__slider-imgs')
        let sliderImgsDots = document.querySelectorAll('.login__slider-dots')

        const imgsInt = setInterval(()=>{
            let sliderActiveImg =Array.from(sliderImgs).findIndex(val=>{
                return val.classList.contains('active')
            })
            sliderImgs[sliderActiveImg].classList.remove('active')
            sliderImgsDots[sliderActiveImg].classList.remove('active')

            sliderActiveImg = sliderActiveImg < sliderImgs.length-1 ? sliderActiveImg + 1 : 0

            sliderImgs[sliderActiveImg].classList.add('active')
            sliderImgsDots[sliderActiveImg].classList.add('active')

        } ,2000)
    }
    useEffect(()=>{changeSliderImg()},[])
    return (
    <div className='login__slider'>
        <div className='login__slider-imgs-cont'>
            <div className='login__slider-imgs active'>
                <img src={slider} alt='sliderOne' className='login__slider-img'/>
                <p className='login__slider-para'>
                    Accelerate Your Entire Mobile Team Workflow
                </p>
            </div>
            <div className='login__slider-imgs '>
                <img src={slider1} alt='sliderOne' className='login__slider-img'/>
                <p className='login__slider-para'>
                    The Most Comprehensive Bug Reporting Tool For Mobile Apps
                </p>
            </div>
            <div className='login__slider-imgs'>
                <img src={slider2} alt='sliderOne' className='login__slider-img'/>
                <p className='login__slider-para'>
                    Secure Crash Reporting With Real-time-alerts
                </p>
            </div>
        </div>
        <div className='login__slider-nav'>
            <span className='login__slider-dots active'></span>
            <span className='login__slider-dots'></span>
            <span className='login__slider-dots'></span>
        </div>
    </div>
)
}

export default LoginSlider