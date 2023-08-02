import react , {useState , useEffect} from 'react';
import axios from 'axios'; 
import { url } from '../../utils/url';
import './style.css'; 
import {useNavigate} from 'react-router-dom'; 
import AppDelete from '../appDelete/AppDelete';
import Loading from '../loading/Loading';

const AdminApplications = () =>{
  const navigate = useNavigate(); 
  const [app,setApp] = useState([]); 
  const [loading,setLoading] = useState(true); 
  const user=JSON.parse(localStorage.getItem("user"));
  const getApplications = async ()=>{
      try{
        const response = await axios.post(`${url}/admin/application/getApp `,
        {role:user.role})
        if(response.status===200){
          setApp(response.data.allApp); 
          setLoading(false); 
        }
      }catch(err){
        alert("Error while fetching applications"); 
      }
  }
  useEffect(()=>{
    getApplications()
  },[])
  const toggleNavigate=(id)=>{
    navigate(`/admin/applications/${id}`); 
  }
  return (
    <div className="adminApplication">
    <table className="applicationTable">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          <th>Date</th>
          <th>Status</th>
          <th>View</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {
        loading ? (
          <tr>
            <td colSpan ={8} className="centerRow">Loading...</td>
          </tr>
        ) 
        : (
        app.length === 0 ? (
          <tr>
            <td colSpan={8} className="centerRow" >No application found</td>
          </tr>
        ):(
        app.map((item,index)=>(
          <tr key={index} className="adminBodyRow" >
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.type}</td>
            <td>{item.updatedAt.slice(0,10)}</td>
            <td>{item.status}</td>
            <td><button  onClick={()=>toggleNavigate(item._id)}>View</button></td>
            <td><AppDelete user={user} id={item._id} fetch={getApplications}/></td>
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

export default AdminApplications; 