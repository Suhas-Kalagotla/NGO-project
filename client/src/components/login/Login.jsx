import React , {useState} from 'react'; 
import "./login.css"; 
const Login =({onFormSwitch}) =>{
  const [email,setEmail] = useState(''); 
  const [pass,setPass] = useState(''); 

  const handleSubmit =(e)=>{
    e.preventDefault(); 
    console.log(email);
  }

  return(
    <div className="login_container">
    <form onSubmit = {handleSubmit}>
      <h1>Login</h1>
      <label for="email">Email</label>
      <input value ={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"id="email"name="email"/>
      <label for="password">Password</label>
      <input value = {pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="****"id="password"name="password"/>
      <button className="">Log In</button>
    </form>
      <p>Don't have an acccount? <a onClick={()=>onFormSwitch('register')}>Register here</a></p>
    </div>
  )
}

export default Login;

