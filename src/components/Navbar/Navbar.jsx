import React, { useState } from 'react'
import "./navbar.scss";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    const [open, setOpen] =useState(false);
  return (
   <nav>
        <div className="left">
            <a href="/" className="logo">
                <p>DU<span>RA</span></p>
            </a>
        </div>
        <div className={`center ${open? "active":""}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>


        </div>
        <div className="right">
            <a href="/contact" className="hireme">
                Hire me
            </a>
            <div className="menu">
                <IoMenu className="menu-logo" onClick={()=>setOpen(!open)}/>
            </div>
        </div>
   </nav>
  )
}

export default Navbar