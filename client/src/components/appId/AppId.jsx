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
  const [color, setColor] = useState("") ; 
  const user = JSON.parse(localStorage.getItem("user")); 
  const findColor = () =>{
    const status = application?.status; 
    if(status === "Pending"){
      setColor("Red"); 
    }else if(status ==="Validated"){
      setColor("orange"); 
    }else if(status ==="Approved"){
      setColor("green"); 
    }
  }
  const navigateToVolunteer= () =>{
    navigate(`/admin/volunteers/${id}`); 
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
  <div className="appIdContainer">
  {
    application ? (
    <>
    <div className="appHeading">
      <button onClick={handleGoBack} className="back"><img src ={Left}/></button>
      <p>Updated At : {application.updatedAt.slice(0,10)}</p>
      <p>Applied On : {application.createdAt.slice(0,10)}</p>
      <div className="statusContainer">
        <p>Status :</p>
        <p className="status" style={{backgroundColor:color}}>{application.status}</p>
      </div>
      <div className="volunteerContainer">
        <p>Volunteer :</p>
        { 
          application.volunteer ? (
            <p>{application.volunteer}</p>
          ) : (
            <p className="volunteerNotAssigned">Not Assigned</p>
          )
        }
      </div>
    </div>
      <hr></hr>
    <div className ="appBody">
      <div className="applicationDetails">
        <p>UserName : {application.name}</p>
        <p>Gender : {application.gender}</p>
        <p>Contact Number : {application.number}</p>
        <p>Address : {application.address}</p>
        {
          application.type === "Scholarship" && 
          <>
          <p>Qualification : {application.qualification}</p>
          <p>Previous Qualification : {application.prevQualification}</p>
          </>
        }
        {
          application.type=== "Infrastructure" && 
          <>
          <p>School Name : {application.schoolName}</p>
          <p>School location : {application.schoolLocation}</p>
          </>
        }
        {
          application.type==="Programm" &&
          <>
          <p>Programm Location : {application.programmLocation}</p>
          </>
        }
      </div>
      <div className="applicationDescription">
        <p>Description :</p>
        <p>{application.description}</p>
      </div>
    </div>
    { !application.volunteer && 
    <button className="assignBtn" onClick={()=>{navigateToVolunteer()}}>Assign Volunteer</button>
    }
    <div className="reportContainer">
    
      <p>Report status : </p> 
      <p className="reportNan"> Not Available</p>
    
    </div>
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

