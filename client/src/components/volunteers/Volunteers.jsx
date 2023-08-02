import react from 'react'
import axios from 'axios';
import { useState } from 'react';
import "../adminApplications/style.css"; 
import { url } from '../../utils/url';
import AppDelete  from "../appDelete/AppDelete";
import { useEffect } from 'react';
import "./volunteers.css"
import { useNavigate, useParams } from 'react-router-dom';

const Volunteers = () =>{
  const navigate = useNavigate(); 
  const {id} = useParams();
  const [volunteers,setVolunteers] = useState([]); 
  const [loading,setLoading] = useState(true); 
  const [selectedVolunteerId,setSelectedVolunteerId] = useState(null); 
  const user = JSON.parse(localStorage.getItem("user")); 

  const fetchVolunteers= async()=>{
    try{
      const response = await axios.post(`${url}/admin/volunteers`,{ 
        role:user?.role,
      }); 
      if(response.status === 200) {
        setVolunteers(response.data.volunteers); 
        setLoading(false); 
      }
    }catch(err){
      console.log(err); 
      alert("Error while getting volunteers data"); 
    }
  }
  
  const assign = async()=>{
    try {
      const res = await axios.post(`${url}/admin/assignVolunteer`,{
        role:user?.role,
        appId:id,
        volunteerId:selectedVolunteerId, 
      });
      if(res.status===200){
        navigate(-1); 
      }
    }catch(err){
      console.log(err); 
      alert("Error in assiging volunteer"); 
    }
  }

  const handleCheckboxChange = (event)=>{
    const id = event.target.value;
    setSelectedVolunteerId((prevSelectedVolunteerId)=>
      prevSelectedVolunteerId === id ? null : id 
    );
  }
  useEffect(()=>{
    fetchVolunteers();
  },[])
  return (
    <div className="volunteerTableContainer">
    <div className="volunteerHeading">
      {
        selectedVolunteerId && <button onClick={assign}>Assign</button>
      }
    </div>
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
        loading ? 
        (<tr>
          <td colSpan={7} className="centeredRow">Loading...</td>
        </tr>
        ):(
        volunteers.length === 0 ?(
          <tr> 
            <td colSpan={7} className="centeredRow">No volunteers found</td>
          </tr>
          ):(
          volunteers.map((item,index)=>(
            <tr key={index} className="volunteerTableBodyRow">
              <td>
              {index+1}
              <input 
                className= "volunteerSelect"
                type="checkbox"
                value = {item._id}
                checked = {selectedVolunteerId === item._id}
                onChange={handleCheckboxChange}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.updatedAt.slice(0,10)}</td>
              <td><button>View</button></td>
              <td><AppDelete user={user} id={item._id} /></td>
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
export default Volunteers ; 
  