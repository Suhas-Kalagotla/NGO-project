import "./appid.css"
import {useNavigate,useParams} from 'react-router-dom'; 
import axios from "axios";
import { url } from "../../utils/url";
import { useEffect,useState } from "react";
import Loading from "../loading/Loading"; 
import Left from "../../images/left.svg"; 

const AppId = () =>{
  const {id} = useParams(); 
  const [application,setApplication] = useState(null); 
  const [color, setColor] = useState({statusColor:"",volunteerColor:""}) ; 
  const user = JSON.parse(localStorage.getItem("user")); 
  const findColor = () =>{
    const status = application?.status; 
    if(status === "Pending"){
      setColor({...color,statusColor:"Red"}); 
    }else if(status ==="Validated"){
      setColor({...color,statusColor:"orange"}); 
    }else if(status ==="Approved"){
      setColor({...color,statusColor:"green"}); 
    }

  }
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
  useEffect(()=>{
    findColor(); 
  },[application]); 

  const navigate = useNavigate(); 
  const handleGoBack = ()=>{
    navigate(-1); 
  }
  return(
  <div className="reportContainer">
  {
    application ? (
    <>
    <div className="appHeading">
      <button onClick={handleGoBack} className="back"><img src ={Left}/></button>
      <p>Updated At : {application.updatedAt.slice(0,10)}</p>
      <p>Applied On : {application.createdAt.slice(0,10)}</p>
      <div className="statusContainer">
        <p>Status :</p>
        <p className="status" style={{backgroundColor:color.statusColor}}>{application.status}</p>
      </div>
      <div className="volunteerContainer">
        <p>Volunteer :</p>
        <p className="volunteer">Not Assigned</p>
      </div>
    </div>
      <hr></hr>
    <div className ="appBody"></div>
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