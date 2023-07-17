import react , {useState , useEffect} from 'react';
import axios from 'axios'; 
import { url } from '../../utils/url';
import './style.css'; 
import ValidateButton from '../validateButton/ValidateButton';
import AppDelete from '../appDelete/AppDelete';

const AdminApplications = () =>{
  const [app,setApp] = useState([])
  const user=JSON.parse(localStorage.getItem("user"));
  const getApplications = async ()=>{
      try{
        const response = await axios.post(`${url}/admin/application/getApp `,
        {role:user.role})
        setApp(response.data.data); 
      }catch(err){
        console.log(err); 
      }
  }

  useEffect(()=>{
    getApplications()
  },[])

  return (
    <div className="adminApplication">
    <table>
      <thead>
        <tr className="adminRow">
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          <th>Validate</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {
        app.map((item,index)=>(
          <tr key={index} className="adminBodyRow">
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.updatedAt.slice(0,10)}</td>
            <td><ValidateButton/></td>
            <td><AppDelete user={user} id={item._id} fetch={getApplications}/></td>
          </tr>
        ))
      }
      </tbody>
    </table>
    </div>
  )
}

export default AdminApplications; 