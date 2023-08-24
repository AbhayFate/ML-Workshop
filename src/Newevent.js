import React from 'react'
import './Newevent.css'
import {BsCalendar3} from 'react-icons/bs'
import {BiBell} from 'react-icons/bi'
import Timeline from './Timeline'
import ai from '../src/assets/ai.png'

const Newevent = () => {
  return (
    <div className='container' id="mainevent">
    <div id="mlbackground">

       <h1 className='mlintro'>SAEINDIA Welcome you to</h1>
       <div id="welcome" className='mlintro'><span>Artificial Intelligance</span><br /> and <span>Machine Learning</span><br />Workshop</div>
       <button id="register-btn">Register Now !</button>
    </div>
    <div id="newevent">
         <h1 id="newheader">ML Workshop</h1> 
         <div id="intro-section">
            <img src="https://www.linkpicture.com/q/DN1.png" alt="Welcome to ML Workshop" id="MLWorkshop"/>
            <div id="intro">
              <div id="description">
                <h1 id="dheader"> <BiBell id="bell"/> Description</h1>
                <div id="intro-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos soluta beatae consequuntur animi quam sed, nulla deleniti dicta maiores amet commodi? Debitis, quisquam sit repellendus consectetur dolores officia itaque, dolor quod, nemo provident eaque architecto sapiente perferendis ad. Sed sunt tempore culpa esse est?
                </div>
                <div className="start-time"> <BsCalendar3 id="calendar"/> Event start at: Time will be notified</div>
              </div>
            </div>
         </div>
         <Timeline />
         
        
    </div>
    </div>
  )
}

export default Newevent