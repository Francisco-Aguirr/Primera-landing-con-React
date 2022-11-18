import React from 'react';
import icono from '../../images/twitter.svg';
import icono2 from '../../images/facebook.svg'
import '../styles/footer.css'


const Footer = () => {
  return (
    <div className="container-foo">
        <div className="contact">
              <p className="abu"><b>About us</b></p>
              <p className='conta'><b>Contact</b></p>
        </div>
        <div className="redes">
              <span><img src={icono} className="twit" />Twitter</span>
              <img src={icono2} className="face" /><span>Facebook</span>
        </div>
    </div>
  )
}
export default Footer
