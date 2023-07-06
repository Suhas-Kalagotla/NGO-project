import React,{useState , useEffect} from 'react';
import './notification.css'
import correct from "../../images/correct.png";

const Notification =({remove})=>{
  const[width,setWidth] =useState(0);
  const[intervalId,setIntervalId] = useState(0);
  const[exit,setExit] =useState(false);
  const handleStart=()=>{
    console.log("start")
    const id = setInterval(()=>{
      setWidth((prev)=>{
        if(prev<100) {
          return prev + 0.5
        }
        return prev
      })
    },20);
    setIntervalId(id);
  }

  const handlePause=()=>{
    clearInterval( intervalId)
    console.log("pause")
  };

  const handleClose=()=>{
    handlePause(); 
    setExit(true);
    setTimeout(()=>{
    },400)
  }

  useEffect(()=>{
    if(width===100){
      handleClose();
    }
  },[width]);
  //  useEffect(()=>{
  //     handleStart()
  //  },[]); 

  return(
    <div 
    onMouseEnter={handlePause} 
    onMouseLeave={handleStart}
    className={`notify ${exit && "exit"}`} 
    >
    <div className="notify-content">
      <img src={correct}/>
      <p>Form Submited</p>
    </div>
    <div className="bar"style={{width:`${width}%`}}></div>
    </div>
  )
}
export default Notification;