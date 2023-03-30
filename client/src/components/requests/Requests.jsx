import React from 'react'
import {useSelector} from 'react-redux';
import {Request} from './request/Request'; 

const Requests=()=>{
  const requests = useSelector((state)=>state.requests)

  console.log(requests);
  return (
  <div>
    <Request></Request>
    <Request></Request>
  </div>
  )
}

export default Requests; 