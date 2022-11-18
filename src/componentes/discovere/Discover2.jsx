import React from 'react'
import imagen from '../../images/covers.jpg';
import imagen2 from '../../images/microphone.svg';
import imagen3 from '../../images/albums.svg';
import imagen4 from '../../images/more.svg';
import '../styles/discover.css'


const Discover2 = () => {
    return (
      <div className="container-discover">
          <div className="discover-new">
            <h1>Discover New Music</h1>
            <img src={imagen2} className="mic-al-mo" />
            <img src={imagen3} className="mic-al-mo" />
            <img src={imagen4} className="mic-al-mo" />
            <p>By joining you can benefit by listening to the latest albums released</p>
          </div>
          <div className="album-img2">
            <img src={imagen} className="album-img" />
          </div>    
      </div>
   )
  }
  
  
  
  
  
  
  export default Discover2