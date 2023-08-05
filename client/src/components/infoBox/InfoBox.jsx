import axios from 'axios';
import react ,{Children, useEffect,useState} from 'react'; 
import {url} from "../../utils/url"; 
import {Link} from 'react-router-dom'; 
import apply from "../../images/apply.svg"; 
import volunteer from "../../images/volunteer.svg"; 
import moneySpent from "../../images/moneySpent.svg";
import "./infobox.css"; 

const InfoBox = ()=>{
  const [countApplications,setCount] = useState(""); 
  const [countVolunteers, setVolunteers] = useState(""); 
  const[isHovered,setIsHovered] = useState(null); 
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
      alert("Error while fetching data"); 
    }
  }
  useEffect(()=>{
    fetchCount(); 
    fetchUserCount(); 
  },[]);

  const handleMouseEnter =(index)=>{
    setIsHovered(index); 
  }
  const handleMouseLeave = ()=>{
    setIsHovered(null); 
  }

  const info = [
    {
      name: "Applications", 
      count:countApplications,
      logo:apply, 
      url:"/admin/applications",
      hoverColor:"#87CEEB",
    },
    {
      name:"Volunteers",
      count :countVolunteers,
      logo : volunteer, 
      url:"/admin/volunteers", 
      hoverColor:"#FFBE44",
    },
    {
      name:"Money Spent", 
      count:"", 
      logo:moneySpent, 
      url:"/admin/money",
      hoverColor:"#273631",
    },
    {
      hoverColor:"#74E0D5",
    }
  ]

  return(
    <>
    <div className="infoContainer" onMouseLeave={handleMouseLeave}>
    {
      info.map((info,index)=>(
        <Link to={info.url} key ={index}>
        
        <div className="info"
        style={{backgroundColor:isHovered === index ? info.hoverColor : ''}}
        onMouseEnter = {()=>handleMouseEnter(index)}
        >
          <div className="top">
          <div className="count">{info.count}</div>
          <div className="infoLogo"><img src={info.logo}/></div>
          </div>
          <div className="infoName">{info.name}</div>
        </div>
        </Link>
      ))
    }
    </div>
    </>
  )
}

export default InfoBox; 