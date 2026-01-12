import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import LogoImg from '../assets/my_logo.png'
import { LuMessageCircle } from "react-icons/lu"

export default function Navbar() {
  return (
    <>
    <nav>
      <img src={LogoImg} alt="logo" className='logo'/>
      <div className="desktopMenu">
          <Link className='desktopLinks'>Home</Link>
          <Link className='desktopLinks'>About</Link>
          <Link className='desktopLinks'>Projects</Link>
      </div>
      <button className="desktopBtn"><LuMessageCircle size={18} />Contact Me</button>
    </nav>
        {/* <nav className="navbar">
            Portfolio
        <div className="nav-links">
            <Link to="/" className='desktopLinks'>Home</Link>
            <Link to="/about" className='desktopLinks'>About</Link>
            <Link className='desktopLinks'>Projects</Link>
        </div>
        <button>Contact Me</button>
        </nav> */}
    </>
  )
}
