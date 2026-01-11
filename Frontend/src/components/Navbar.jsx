import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="nav-container">
            Portfolio
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link>Projects</Link>
        </div>
        <button>Contact Me</button>
        </nav>
    </>
  )
}
