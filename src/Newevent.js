import React from 'react'
import './Newevent.css'
import {BsCalendar3} from 'react-icons/bs'
import {BiBell} from 'react-icons/bi'
import Timeline from './Timeline'
import ai from '../src/assets/ai.png'
import mlposter from '../src/assets/mlposter.jpeg'

const Newevent = () => {
  return (
    <div className='container' id="mainevent">
    <div id="mlbackground">

       <h1 className='mlintro'>SAEINDIA Welcome you to</h1>
       <div id="welcome" className='mlintro'><span>Artificial Intelligence</span><br /> and <span>Machine Learning</span><br />Workshop</div>
       <button id="register-btn"><a id='reg' href='https://forms.gle/RdCGSQHC5EyrXvvZ9'>Register Now!</a></button>
    </div>
    <div id="newevent" className='container-fluid'>
         <h1 id="newheader">ML Workshop</h1> 
         <div id="intro-section">
            <img src={mlposter} alt="Welcome to ML Workshop" id="MLWorkshop"/>
            <div id="intro">
              <div id="description">
                <h1 id="dheader"> <BiBell id="bell"/> Description</h1>
                <div id="intro-para">
                Embark on a Journey into Machine Learning: Join our immersive two-day workshop to dive into the world of Machine Learning. Day 1 covers Python basics and explores Deep Learning with a focus on CNN models. Day 2 includes hands-on projects, from image classification to real-time object detection with YOLO. All skill levels welcome. Gain practical skills, collaborate, and receive a participation certificate. Secure your spot for a dynamic learning experience!
                </div>
                <div className="start-time"> <BsCalendar3 id="calendar"/> Event start at:02/07/2023(SATURDAY): 10:00 AM </div>
              </div>
            </div>
         </div>
         <Timeline />
         
       
    </div>
    </div>
  )
}

export default Newevent