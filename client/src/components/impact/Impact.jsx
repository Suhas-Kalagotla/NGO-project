import react,{useEffect, useState} from 'react'; 
import axios from 'axios'; 
import CountingAnimation from "../countAnimation/CountingAnimation"; 
import "./impact.css"; 
import { url } from '../../utils/url';

const Impact = () =>{
  const [scholarshipCount,setScholarshipCount] = useState("0"); 
  const [isFetched,setFetched] = useState(false); 
  const fetchCounter = async()=>{
    try{
      const response = await axios.post(`${url}/user/count`,{
        getApplication:"Scholarship", // in database value is in capital 
        status:"Pending",
      })
      if(response.status == 200){
        console.log(response); 
        setFetched(true); 
        setScholarshipCount(response.data.count); 
      }
    }catch(err){
      console.log(err); 
    }
  }
  useEffect(()=>{
    if(!isFetched){
      fetchCounter();
    }
  },[isFetched]);
  const data = [
    {
      name: "Scholarship",
      count:scholarshipCount,
      description:"Are provided to students",
    },
    {
      name: "Awareness Programms",
      count:200, 
      description:"Are conducted aross India",
    },
    {
      name:"Schools", 
      count:400, 
      description:"Are funded to develop the infrastructure and facilities", 
    }
  ]
  return(
    <div className="impactContainer">
      <h2>Impact we created</h2>
      <div className="impactBody">
        { data.map((info,index)=>(
          <div className="boxes" key ={index}>
            <div className="impactName">{info.name}</div>
            <div className="impactCounter"><CountingAnimation to={info.count}duration="2000"/>+</div>
            <div className="impactDescription">{info.description}</div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Impact; 