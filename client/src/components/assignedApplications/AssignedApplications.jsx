import axios from "axios"
import {url} from "../../utils/url"; 
import { useState ,useEffect} from "react";
import Filter from "../../images/filter.svg"; 
import "./assignedApplications.css";
import { useParams,useNavigate,} from "react-router-dom";
import NavigateBack from "../navigateBack/NavigateBack";

const AssignedApplications = () =>{
  const {id} = useParams(); 
  const user = JSON.parse(localStorage.getItem("user"));  
  const volunteerId = user.role==="volunteer" ? user._id : id ; 
  const [applications,setApplications] = useState([]); 
  const [count,setCount] = useState();
  const [filter,setFilter] = useState("All"); 
  const [loading,setLoading] = useState(true); 

  const fetchApplications = async () =>{
    try{
      const response = await axios.post(`${url}/volunteer/fetchAssignedApp`,{
        role:user.role,
        id:volunteerId,
        filter:filter,
      })
      if(response.status === 200){
        setApplications(response.data.filterApp); 
        setCount(response.data.allCount); 
        setLoading(false); 
      }
    }catch(err){
      console.log(err); 
      alert("Error while getting applications data"); 
    }
  }
  const toggleFilter = (optionValue) =>{
    setFilter(optionValue); 
  }

  useEffect(()=>{
    fetchApplications();
  },[filter])

  return(
  <div className="assignedApp">
    <div className="data">
      {
        !count ? (
          <p className="alignCenter">Loading...</p>
        ):(
          <>
          {
            user.role==="admin" && 
            <NavigateBack/>
          }
          <p>Applications Pending : {count.pendingCount}</p>
          <p>Applications Reported : {count.reportedCount}</p>
          <p>Total Applications : {count.totalCount}</p>
          <div className="filter">
            <div className="filterIcon"> <img src={Filter}/></div>
            <div className="filterDropdown">
              <div 
              className={`option ${filter==="All" && "selectedOption"}`} 
              onClick={()=>toggleFilter("All")}
              data-value="All">All</div>
              <div 
              className={`option ${filter==="Pending" && "selectedOption"}`} 
              onClick={()=>toggleFilter("Pending")}
              data-value="Pending">Pending</div>
              <div 
              className={`option ${filter==="Reported" && "selectedOption"}`} 
              onClick={()=>toggleFilter("Reported")}
              data-value="Reported">Reported</div>
              
            </div> 
          </div>
          </>
         )
      }
    </div>
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
          loading ? 
          (
            <tr>
              <th colSpan={6} className ="centerRow">Loading...</th>
            </tr>
          ):(
            applications && applications.length === 0 ? (
              <tr>
                <th colSpan={6} className="centerRow">Zero Applications</th>
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