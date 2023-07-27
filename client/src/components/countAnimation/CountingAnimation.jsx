import React,{useState,useEffect} from 'react'; 
import {useInView} from 'react-intersection-observer'; 
const CountingAnimation = ({to,duration})=>{
  const from = 0 ; 
  const [count,setCount] = useState(from); 
  const [isVisible,setIsVisible] = useState(false); 
  let startTime;
  const step=(timestamp)=>{
    if(!startTime) startTime = timestamp; 
    const progress = timestamp - startTime; 
    const increment = Math.floor(((to-from)*progress)/duration);

    if(progress< duration){
      setCount(from+increment); 
      requestAnimationFrame(step); 
    } else{
      setCount(to); 
      cancelAnimationFrame(step); 
    }
  };
  const {ref,inView} = useInView({
    triggerOnce:true, 
    rootMargin:'-50px 0px', 
  });
  useEffect(()=>{
    if(inView && !isVisible){
      setIsVisible(true); 
      requestAnimationFrame(step); 
    }
    return()=>cancelAnimationFrame(step); 
  },[inView,isVisible, to,duration]); 

  return (
    <div ref={ref}>
    {count}
    </div>
)
};

export default CountingAnimation ; 