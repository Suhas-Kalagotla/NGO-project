import React,{useState,useEffect} from 'react'; 

const CountingAnimation = ({to,duration})=>{
  const from = 0 ; 
  const [count,setCount] = useState(from); 
  let startTime;
  let animationFrame; 
  const step=(timestamp)=>{
    if(!startTime) startTime = timestamp; 
    const progress = timestamp - startTime; 
    const increment = Math.floor((to-from)*(progress/duration));
    if(progress< duration){
      setCount(from+increment); 
      animationFrame = requestAnimationFrame(step); 
    } else{
      setCount(to); 
    }
  };
  useEffect(()=>{
    animationFrame = requestAnimationFrame(step); 
    return()=>cancelAnimationFrame(step); 
  },[from,to,duration]); 

  return (
    <div>
    {count}
    </div> 
)
};

export default CountingAnimation ; 