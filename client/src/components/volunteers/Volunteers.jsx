import react from 'react'
import axios from 'axios';
import { useState } from 'react';
import "../adminApplications/style.css"; 
import { url } from '../../utils/url';
import AppDelete  from "../appDelete/AppDelete";
import { useEffect } from 'react';
import "./volunteers.css"
const Volunteers = () =>{
  const [volunteers,setVolunteers] = useState([]); 
  const [noVolunteersError,setNoVolunteersError] = useState(""); 
  const user = JSON.parse(localStorage.getItem("user")); 

  const fetchVolunteers= async()=>{
    try{
      const response = await axios.post(`${url}/admin/volunteers`,{ 
        role:user?.role,
      }); 
      console.log(response); 
      if(response.status === 200) {
        console.log(response); 
        setVolunteers(response.data.volunteers); 
      }
    }catch(err){
      console.log(err); 
      alert("Error while getting volunteers data"); 
    }
  }
  useEffect(()=>{
    fetchVolunteers();
  },[])
  return (
    <div className="volunteerTableContainer">
    <table className="volunteerTable">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>View</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {
        volunteers ? (
            volunteers.length === 0 ?(
              <tr> 
                <td colSpan={7} className="centeredRow">No volunteers found</td>
              </tr>
              ):(
                volunteers.map((item,index)=>(
                  <tr key={index} className="volunteerTableBodyRow">
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.updatedAt.slice(0,10)}</td>
                    <td><button>View</button></td>
                    <td><AppDelete user={user} id={item._id} /></td>
                  </tr>
                ))
              )
        ):(
        <tr>
          <td colSpan={7} className="centeredRow">Loading...</td>
        </tr>
        )
      }
      </tbody>
    </table>
    </div>
  )
}
export default Volunteers ; 