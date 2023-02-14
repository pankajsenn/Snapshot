import { useState } from "react";
import './count-timer.css';
function CountdownTimer() {
  const [count, setcount] = useState("");
  const [flag,setflag] = useState(true);
  function keyhandler(event) {
    if (event.key === "Enter") {
      let value = Math.floor(parseInt(event.target.value));
      if (value > 0 && flag) {
        setflag(false);
        let interval = setInterval(() => {
          setcount(value--);
          if (value < 0) {
            clearInterval(interval);
            setflag(true);
            event.target.value = "";
          }
        }, 1000)
      }else if (value <0 && flag){
        setcount(0);
      }
    }
  }
return (<div id="container">
  <h1>CountDown Timer</h1>
  <input type="number" onKeyDown={keyhandler} id="timeCount" placeholder="Enter time And Click Enter"/>
  <div id="current-time">
    {
      count
    }
  </div>
</div>
)
}

export default CountdownTimer;