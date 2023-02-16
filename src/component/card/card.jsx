import React from "react";
import '../card/card.css'
function Card({src}) {
    return (
        <div id="card-container">
           <img id="card-img" src={src}/>
        </div>
    )
}
export default Card;