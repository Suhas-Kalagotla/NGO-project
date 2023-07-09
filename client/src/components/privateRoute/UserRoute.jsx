import react from 'react'
import {Navigate} from 'react-router-dom';

const UserRoute=({children})=>{
  const token = localStorage.getItem("token")
  return token!==null ? children : <Navigate to="/login"/>;
}

export default UserRoute;