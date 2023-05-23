import react,{useEffect,useState} from 'react'
import axios from 'axios';
import {url} from "../../utils/url.js";

const Application =()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user.email;
  const [data,setData] = useState("");

  const getData=async()=>{
    const response = await axios.post(`${url}/application/applications`,{email:email});
    setData(response.data.msg);
    console.log(response.data);
  }
  useEffect(()=>{
    getData();
  },[]);
  
  return(
    <p>{data}</p>
  )
}

export default Application;