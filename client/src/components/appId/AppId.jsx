import "./appid.css"
import {useNavigate,useParams} from 'react-router-dom'; 
import axios from "axios";
import { url } from "../../utils/url";
import { useEffect,useState } from "react";
import Loading from "../loading/Loading"; 

const AppId = () =>{
  const {id} = useParams(); 
  const [application,setApplication] = useState(null); 
  const user = JSON.parse(localStorage.getItem("user")); 
  const fetchApplication = async () =>{
    try{
      const response = await axios.post(`${url}/admin/application/getDetails`,
      {
        role: user.role, 
        id : id ,
      }
      );
      if(response.status===200) {
        setApplication(response.data.application); 
      }
    }catch(err){
      console.log(err); 
    }
  } 
  useEffect(()=>{
    fetchApplication(); 
  },[]); 

  const navigate = useNavigate(); 
  const handleGoBack = ()=>{
    navigate(-1); 
    console.log("hello")
  }
  return(
  <div className="reportContainer">
  {
    application ? (
      <>
    <p>
      user id : {id}
      and email is : {application.email}
    </p>
    <button onClick={handleGoBack}>Go back</button>
    </>
  ):
  (
    <Loading/>
  )
  }
  </div>
  )
}

export default AppId; 