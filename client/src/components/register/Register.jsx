import React ,{useState} from 'react'; 
import "./register.css"; 
const Register =({onFormSwitch})=>{
  const[email,setEmail] = useState('');
  const[pass,setPass] =useState(''); 
  const [name,setName] = useState('');
  const [conpass,setConpass] = useState(''); 

  const handleSubmit =(e) =>{
    e.preventDefault(); 
    console.log(email); 
  }
  return(
    <div className="register">
      <form onSubmit ={handleSubmit}>
        <h1>Registration</h1>
        <label for="name">Full name</label>
        <input value ={name} 
        onChange={(e)=>setName(e.target.value)}
        name="name" 
        id="name" 
        placeholder="Full Name" 
        required/>

        <label for="email">Email</label>
        <input value ={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        type="email" 
        placeholder="youremail@gmail.com"
        id="email"name="email" 
        required/>
       

        <label for="password">Password</label>
        <input value = {pass} 
        onChange={(e)=>setPass(e.target.value)} 
        type="password" 
        placeholder="****"
        id="password"
        name="password" required/>
        

        <label for="confirm_password">Confirm Password</label>
        <input value = {conpass} 
        onChange={(e)=>setConpass(e.target.value)} 
        type="password" 
        placeholder="****"
        id="confirm_password"
        name="confirm_password" 
        required/>
      
        
        <button>Register</button>
      </form>
      <p>Already have an accout? <button onClick={()=>onFormSwitch('login')}>Login here</button></p>
    </div>
  )
}
export default Register