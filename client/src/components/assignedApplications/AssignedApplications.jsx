import axios from "axios"
import {url} from "../../utils/url"; 
import { useState ,useEffect} from "react";
import "./assignedApplications.css"
const AssignedApplications = () =>{
  const user = JSON.parse(localStorage.getItem("user"));  
  const [applications,setApplications] = useState([]); 
  const [loading,setLoading] = useState(true); 
  const fetchApplications = async () =>{
    try{
      const response = await axios.post(`${url}/volunteer/fetchAssignedApp`,{
        role:user?.role,
        id:user?._id,
      })
      if(response.status === 200){
        console.log(response.data.app); 
        setApplications(response.data.app); 
        setLoading(false); 
      }
    }catch(err){
      console.log(err); 
      alert("Error while getting applications data"); 
    }
  }

  useEffect(()=>{
    fetchApplications();
  },[])
  useEffect(()=>{
    console.log(applications); 
  },[])
  return(
  <div className="assignedApp">
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Type</th>
          <th>Phone No.</th>
          <th>Status</th>
          <th>Applied On</th>
          <th>Report</th>
        </tr>
      </thead>
      <tbody>
        {
          loading === true? 
          (
            <tr>
              <th colSpan={6} className ="centerRow">Loading...</th>
            </tr>
          ):(
            applications.length === 0 ? (
              <tr>
                <th colSpan={6} className="centerRow">No Application is Assigned</th>
              </tr>
            ):(
            applications.map((app,index)=>(
              <tr key={index}>
                <th>{index+1}</th>
                <th>{app.name}</th>
                <th>{app.type}</th>
                <th>{app.number}</th>
                <th>{app.status}</th>
                <th>{app.createdAt.slice(0,10)}</th>
                <th><button className="reportBtn">Report</button></th>
              </tr>
            ))
            )
          )
        }
      </tbody>
    </table>
  </div>
  )
}

export default AssignedApplications ; 