import React, { useState } from 'react'
import "./navbar.scss";
import { IoMenu } from "react-icons/io5";
import {Link} from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] =useState(false);
  return (
   <nav>
        <div className="left">
            <Link to="/" className="logo">
                <p>DU<span>RA</span></p>
            </Link>
        </div>
        <div className={`center ${open? "active":""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>


        </div>
        <div className="right">
            <Link to="/contact" className="hireme">
                Hire me
            </Link>
            <div className="menu">
                <IoMenu className="menu-logo" onClick={()=>setOpen(!open)}/>
            </div>
        </div>
   </nav>
  )
}

export default Navbar