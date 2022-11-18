import React from 'react';
import logo from '../../images/logo.png';
import '../styles/navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="container-nav">
        <div className="logo-text">
        <img src={logo} alt="" />
        </div>
          <div className="logo-text2">
          <h2>Soundwave</h2>
        </div>    
        <div className="links">
          <Link to="/Discover" className="dico">Discover</Link>
          <Link to="/Join" className='dico2'>Join</Link>
        </div>
    </div>
  )
}






export default Navbar

