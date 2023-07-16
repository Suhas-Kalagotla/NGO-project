import axios from 'axios';
import react ,{useEffect,useState} from 'react'; 
import {url} from "../../utils/url"; 


const InfoBox = ()=>{
  const [count,setCount] = useState(""); 
  const user = JSON.parse(localStorage.getItem("user")); 
  const role = user.role; 
  const fetchCount =async()=>{
    try{
      const response = await axios.post(`${url}/admin/dashboard/count`,{
        role
      })
      setCount(response.data.count);  
    }catch(err){
      console.log(err); 
    }
  }

  useEffect(()=>{
    fetchCount(); 
  },[]);

  return(
    <div className="applicationsInfo">
          <p>count = {count}</p>
    </div>
  )
}

export default InfoBox; 