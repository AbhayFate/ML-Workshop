import React from 'react'
import  { useState, useRef, useEffect } from 'react';
import { Link } from 'react';
import './Header.css'
import logo from './Logo_final.png'


const Header = () => {
   
  return (
    <nav className="navbar  border-bottom border-body" data-bs-theme="dark" id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://www.saenitdgp.com/"><img src={logo} alt="" id="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="https://www.saenitdgp.com/">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="https://www.saenitdgp.com/events">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Members</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header