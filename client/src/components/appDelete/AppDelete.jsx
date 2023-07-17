import axios from 'axios';
import react from 'react'
import Delete from "../../images/trash.svg"
import { url } from '../../utils/url';
import "./appDelete.css"; 

const AppDelete = ({id,user,fetch})=>{
  const handleDelete = async ()=>{
    try{
      const response = await axios.post(`${url}/admin/application/appDelete`,{
        id : id,
        role:user.role
      })
      fetch(); 
    }catch(err){
      console.log(err); 
    }
  }
  
  return(
    <button className="appDelete"
    onClick ={handleDelete}>
      <img src={Delete}/>
    </button>
  )
}

export default AppDelete; 