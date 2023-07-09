import react from 'react'
import {Navigate} from 'react-router-dom'; 

const AdminRoute = ({Children}) =>{
  const user = JSON.parse(localStorage.getItem("user")); 
  return user?.role!=="admin" &&  <Navigate to ="/"/>;
}

export default AdminRoute; 