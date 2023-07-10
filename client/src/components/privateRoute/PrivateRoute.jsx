import React from 'react'; 
import {Navigate, Outlet} from "react-router-dom"; 

const checkLogin=()=>{
  const user = JSON.parse(localStorage.getItem('user')); 
  if(user){
    return {
      login:true,
      role:user.role
    }
  }else {
    return {
      login:false,
      role:null
    }
  }
}

const PrivateRoute=({userRole})=>{
  const {login,role}=checkLogin(); 
  
  if(userRole){
    return login ? (
      userRole ===role ? <Outlet/> : <Navigate to="/pagenotfound"/>
    ):(
      <Navigate to="/login"/>
    )
  }else {
    return login? <Outlet/> : <Navigate to="/login"/>
  }
}
export default PrivateRoute; 