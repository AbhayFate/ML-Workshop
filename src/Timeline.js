import React from 'react'
import './TimelineStyles.css'

const Timeline = () => {
  return (
    <>
    <div className="container-fluid blue-bg">
    <div className="container">
        <h2 className="pb-3 pt-2">Timeline of the Event</h2>
     
        <div className="row align-items-center how-it-works">
            <div className="col-2 text-center bottom">
                <div className="circle">Day 1</div>
            </div>
            <div className="col-6">
                <h5><strong>02/07/2023</strong></h5>
                <br></br>
               <div className='basic'><p>10AM-12PM: Basics Of Python</p></div> 
                
                 <p className='basic'>4PM-6PM: Fundamentals of Machine Learning Focusing on Neural Network and CNN models </p>
            </div>
        </div>
      
        <div className="row timeline">
            <div className="col-2">
                <div className="corner top-right"></div>
            </div>
            <div className="col-8">
                <hr />
            </div>
            <div className="col-2">
                <div className="corner left-bottom"></div>
            </div>
        </div>
      
        <div className="row align-items-center justify-content-end how-it-works">
            <div className="col-6 text-right">
                <h5><strong>03/07/2023</strong></h5>
                <br></br>
                <p>10AM-12PM : Recap of Neural Networks, followed by an engaging Image Classification project using Neural Networks. </p>
                
                 <p>4PM-6PM :  Apply your knowledge to a Real-Time Object Detection project with the YOLO algorithm.</p>
            </div>
            <div className="col-2 text-center full">
                <div className="circle">Day 2</div>
            </div>
        </div>
      
        <div className="row timeline">
            <div className="col-2">
                <div className="corner right-bottom"></div>
            </div>
            <div className="col-8">
                <hr />
            </div>
            <div className="col-2">
                <div className="corner top-left"></div>
            </div>
        </div>
       
        <div className="row align-items-center how-it-works">
            <div className="col-2 text-center top">
                <div className="circle">END</div>
            </div>
            <div className="col-6">
                <p>"As we come to the end, remember that the world of technology is ever-evolving. Embrace change, keep learning, and stay curious!"</p>
                
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Timeline