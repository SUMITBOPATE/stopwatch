import React from "react";
import "./style.css";
import { useState, useRef } from 'react';


export default function App() {




  const[time,setTime]=useState(null);
  const[now,setNow]=useState(null);
  const intervalRef = useRef(null);




function handleStart(){
setTime(Date.now());
setNow(Date.now());
//clearinterval is used to clear the time set with help of  setinterval
clearInterval(intervalRef.current);
intervalRef.current = setInterval(() => {
  setNow(Date.now());
}, 10);
}

function handleStop() {
  clearInterval(intervalRef.current);
}


let secondsPassed = 0;
if (time != null && now != null) {
  secondsPassed = (now - time) / 1000;
}





  return (
    <div class="container">
    <div class="wrapper">
        <p>  <span classAn> {secondsPassed.toFixed(3)}</span>
             
            </p> <br></br>
        <button  onClick={handleStart} class="btn-start">Start</button>
        <button class="btn-stop" onClick={handleStop}>Stop</button>
    
    </div>
</div>
  );
}
