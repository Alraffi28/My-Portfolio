import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="navbar">
            Portfolio
        <div className="nav-links">
            <Link to="/" className='desktopLinks'>Home</Link>
            <Link to="/about" className='desktopLinks'>About</Link>
            <Link className='desktopLinks'>Projects</Link>
        </div>
        <button>Contact Me</button>
        </nav>
    </>
  )
}
