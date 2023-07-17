import React , {useState} from 'react'; 
import "./login.css"; 
import axios from "axios";
import { url } from '../../utils/url';
import {useNavigate} from "react-router-dom"; 
 
const Login =({onFormSwitch,setToken}) =>{
  const [email,setEmail] = useState(''); 
  const [pass,setPass] = useState('');
  const [passVisible,setVisible] = useState(false); 
  const [errors,setErrors] =useState( ); 

  const toggleVisibility = ()=>{
    setVisible(!passVisible); 
  }

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
      const user = JSON.parse(localStorage.getItem("user")); 
      setToken(response.data.token); 
      if(user.role==="user"){
        navigate("/");
      }else if(user.role==="admin"){
        navigate("/admin/dashboard"); 
      }
    }catch(err){
      const msg = err.response.data.msg;
      setErrors(msg);
    }
    
  }

  return(
    
    <div className="loginContainer">
    <form onSubmit = {handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input value ={email} onChange={(e)=>setEmail(e.target.value)} type="email" 
      placeholder="youremail@gmail.com"id="email"name="email"/>

      <label htmlFor="password">Password</label>
      <div className="loginDiv">
      <input value = {pass} onChange={(e)=>setPass(e.target.value)} 
      type={passVisible ? "text": "password"} 
      placeholder="****"id="password"name="password"/>
      <button onClick={toggleVisibility} type="button" className="passToggle">
        {passVisible ? "Hide Password" : "Show Password"}
      </button>
      </div>
      
      <p className="error">{errors && errors}</p>
      <button className="loginButton" type="submit">Log In</button>
    </form>
      <p>Don't have an acccount? <a onClick={()=>onFormSwitch('register')}>Register here</a></p>
    </div>
  )
}

export default Login;

