import axios from 'axios';
import react ,{useEffect,useState} from 'react'; 
import {url} from "../../utils/url"; 
import apply from "../../images/apply.svg"; 
import volunteer from "../../images/volunteer.svg"; 
import moneySpent from "../../images/moneySpent.svg";
import CountingAnimation from '../countAnimation/countAnimation'; 
import "./infobox.css"; 

const InfoBox = ()=>{
  const [countApplications,setCount] = useState(""); 
  const [countVolunteers, setVolunteers] = useState(""); 
  const [countMoney,setMoneySpent] = useState(""); 
  const user = JSON.parse(localStorage.getItem("user")); 
  const fetchCount =async()=>{
    try{
      const response = await axios.post(`${url}/admin/dashboard/count`,{
        role:user.role
      })
      setCount(response.data.count);  
    }catch(err){
      console.log(err); 
    }
  }
  const fetchUserCount=async()=>{
    try{
      const response = await axios.post(`${url}/admin/countUser`,{
        searchUser:"volunteer",
        role:user.role,
      })
      setVolunteers(response.data.countUser); 
    }catch(err){
      console.log(err); 
    }
  }
  useEffect(()=>{
    fetchCount(); 
    fetchUserCount(); 
  },[]);

  const info = [
    {
      name: "Applications", 
      count:countApplications,
      logo:apply, 
      color:"#8ECAe6",
    },
    {
      name:"Volunteers",
      count :countVolunteers,
      logo : volunteer, 
      color:"#ffb703",
    },
    {
      name:"Money Spent", 
      count:"", 
      logo:moneySpent, 
      color:"#FB8500",
    },
    {

    }
  ]

  return(
    <>
    <div className="infoContainer">
    {
      info.map((info,index)=>(
        <div className="info" key ={index} style={{backgroundColor:info.color}}>
          <div className="top">
          <div className="count">{info.count}</div>
          <div className="infoLogo"><img src={info.logo}/></div>
          </div>
          <div className="infoName">{info.name}</div>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default InfoBox; 