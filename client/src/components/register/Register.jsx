import React ,{useState} from 'react'; 
import "./register.css"; 
const Register =({onFormSwitch})=>{
  const[email,setEmail] = useState('');
  const[pass,setPass] =useState(''); 
  const [name,setName] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault(); 
    console.log(email); 
  }
  return(
    <div className="register">
      <form onSubmit ={handleSubmit}>
        <h1>Registration</h1>
        <label for="name">Full name</label>
        <input value ={name} onChange={(e)=>setName(e.target.value)}name="name" id="name" placeholder="Full Name"/>
        <label for="email">Email</label>
        <input value ={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"id="email"name="email"/>
        <label for="password">Password</label>
        <input value = {pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="****"id="password"name="password"/>
        <button>Log In</button>
      </form>
      <p>Already have an accout? <a onClick={()=>onFormSwitch('login')}>Login here</a></p>
    </div>
  )
}
export default Register