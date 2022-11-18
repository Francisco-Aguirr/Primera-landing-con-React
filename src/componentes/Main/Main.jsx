import React from 'react';
import imagen from '../../images/landing-page-girl.png';
import '../styles/main.css'
import {Link} from "react-router-dom"

const Main = () => {
  return (
    <div className="container-main">
        <div className="landing-girl">
          <img src={imagen} alt="" className="landing-girl2" />
        </div>
        <div className="circulo3"></div>
        <div className="circulo4"></div>
        <div className="circulo5"></div>
        <d    iv className="feel-music">
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand songs with one click</p>
          <button className="btn-join"><Link to="/Join" className="now-join">Join Now</Link></button>
        </div> 
    </div>
 )
}






export default Main

