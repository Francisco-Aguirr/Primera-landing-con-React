import React from "react";
import '..//styles/join.css'

const Join2 =()=>{
    return (
<div className="container-join">
    <div className="join-fun">
         <h1>Join the <span class="funy">fun.</span></h1>
    </div>
    <div className="circulo1"></div>
    <div className="circulo2"></div>
    <div className="join-form">
        <p>Name:</p>
     <input type="Name" class="inputs"/><br />
     <p>Email:</p>
     <input type="Email" class="inputs"/><br />
     <p>Password:</p>
     <input type="password" class="inputs"/><br />
     <button className="btn-join-form">Join Now</button>
    </div>
</div>
    )
}

export default Join2