import react,{useEffect,useState} from 'react'
import Application from './Application';
import axios from 'axios';
import {url} from "../../utils/url.js";
import add from "../../images/add.png";
import {Link} from "react-router-dom";
import './index.css';

const Index=()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user.email;
  const [data,setData]=useState([]);
  const getData=async()=>{
    const response = await axios.post(`${url}/application/applications`,{email:email});
    setData(response.data.data);
  }
  useEffect(()=>{
    getData();
  },[]);
  
  return(
  <>
  {
    data.map((d, index) => ( 
      <Application data={d}/>
  ))
  }
    <Link to="/application/form">
  <div class="newApply">
      <img src={add}/>
      <p>New Application</p>
  </div>
    </Link>
  </>
  )
}

export default Index; 