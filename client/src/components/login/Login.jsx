import React , {useState} from 'react'; 
import "./login.css"; 
import axios from "axios";
import { url } from '../../utils/url';
import {useNavigate} from "react-router-dom"; 
 
const Login =({onFormSwitch}) =>{
  const [email,setEmail] = useState(''); 
  const [pass,setPass] = useState('');
  const [errors,setErrors] =useState( ); 
  const navigate = useNavigate();

  const handleSubmit =async (e)=>{
    e.preventDefault(); 
    try{
      const response = await axios.post(`${url}/auth/login`,{
        email,
        pass
      });
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("user",JSON.stringify(response.data.user));
      navigate("/");
    }catch(err){
      const msg = err.response.data.msg;
      setErrors(msg);
    }
    
  }

  return(
    <div className="login_container">
    <form onSubmit = {handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input value ={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"id="email"name="email"/>
      <label htmlFor="password">Password</label>
      <input value = {pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="****"id="password"name="password"/>
      <p className="error">{errors && errors}</p>
      <button className="">Log In</button>
    </form>
      <p>Don't have an acccount? <a onClick={()=>onFormSwitch('register')}>Register here</a></p>
    </div>
  )
}

export default Login;

