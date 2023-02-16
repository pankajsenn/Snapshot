import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../navbar/navbar.css'
function Navbar(){
    const [input,setinput] = useState("");
    const navigate = useNavigate();
    function clickhandler(event){
        if(input==="Mountain"||input==="Mountains"||input==="mountain"||input==="mountains"){
            setinput("");
            navigate("/mountain");
        }
        else if(input==="beaches"||input==="beache"||input==="Beaches"||input==="Beache"){
            setinput("");
            navigate("/beaches");
        }
        else if(input==="bird"||input==="birds"||input==="Bird"||input==="Birds"){
            setinput("");
            navigate("/birds");
        }else if(input==="food"||input==="foods"||input==="Food"||input==="Foods"){
            setinput("");
            navigate("/food");
        }
        else{
         alert("Please provide valid search")
        }
    } 
    return(
        <>
     <img src="/snapshot-logo.png" alt="decorative" id="logo"onClick={()=>{navigate("/")}}/>
     <div id="search-bar">
     <input id="input" placeholder="Search..." onChange={(e)=>{setinput(e.target.value)}}/>
     <button id="search-btn" onClick={clickhandler}><img id="search-img"src="/searchicon.png" alt="search"/></button>
     </div>
     <div id="category">
        <button id="mountain" className="category-btn" onClick={()=>{navigate("/mountain")}}>Mountain</button>
        <button id="beach" className="category-btn" onClick={()=>{navigate("/beaches")}}> Beaches</button>
        <button id="birds" className="category-btn" onClick={()=>{navigate("/birds")}}>Birds</button>
        <button id="food" className="category-btn" onClick={()=>{navigate("/food")}}>Food</button>
     </div>
     </>
    )
    
}
export default Navbar;