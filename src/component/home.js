import React, { useEffect, useState } from "react"
import Card from "./card/card";
import Navbar from "./navbar/navbar";
function Home(){
    const [photos,setphotos] = useState([]);
    let url ='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f0e681a956f2aa9e9a9aa0ebafaec7a0&tags=nature&format=json&nojsoncallback=1'
    useEffect(()=>{
       fetch(url).then(res=>res.json()).then(data=>{
     setphotos(data.photos.photo);
       }).catch(err=>console.log(err));
    },[])
    return(
        <>
            <Navbar/>
            <h1 id="pictures">Pictures</h1>
            <div id="grid-container">
            {
                photos.map((photo) => {
                    let farm = photo.farm;
                    let server = photo.server;
                    let id = photo.id;
                    let secret = photo.secret;
                    let img = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
                    return (<Card src={img} />);
                })
            }
            </div>
        </>
    )
}
export default Home;