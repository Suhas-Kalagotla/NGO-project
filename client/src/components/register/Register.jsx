import React, { useState ,useEffect} from 'react';
import "./register.css";
import CircleImage from "./circle-check.png";
import Exclamation from "./exclamation.png";
import axios from "axios"; 

const Register = ({ onFormSwitch }) => {
  const initialValues = { name: "", email: "", pass: "", conPass: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const response = await axios.post("http://localhost:5000/auth/register",formValues)
    console.log(response); 
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.pass) {
      errors.pass = "Password is required";
    } else if (values.pass.length < 8) {
      errors.pass = "Password must be more than 8 characters";
    } else if (values.pass.length > 20) {
      errors.pass = "Password cannot exceed more than 10 characters";
    }

    if(!values.conPass){
      errors.conPass = "Confirm Password"; 
    }else if(values.conPass != values.pass){
      errors.conPass = "Password does not match"; 
    }
    changeClass();
    return errors;
  };
  const success = "success"; 
  const fail = "fail"; 
  const changeClass = ()=>{

  }
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className={`formControl ${formErrors.name && "fail"}`}>
          <label for="name">Full name</label>
          <input value={formValues.name}
            onChange={handleChange}
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <img className="circleCorrect" src={CircleImage} />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.name}</small>
        </div>
        

        <div className={`formControl `}>
          <label for="email">Email</label>
          <input value={formValues.email}
            onChange={handleChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email" name="email"
          />
          <img className="circleCorrect" src={CircleImage} />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.email}</small>
        </div>

        <div className={`formControl`}>
          <label for="password">Password</label>
          <input value={formValues.pass}
            onChange={handleChange}
            type="password"
            placeholder="****"
            id="password"
            name="pass" />
          
          <img className="circleCorrect" src={CircleImage} />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.pass}</small>
        </div>

        <div className={`formControl`}>
          <label for="confirm_password">Confirm Password</label>
          <input value={formValues.conPass}
            onChange={handleChange}
            type="password"
            placeholder="****"
            id="confirm_password"
            name="conPass"
          />
          <img className="circleCorrect" src={CircleImage} />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.conPass}</small>
        </div>

        <button>Register</button>
      </form>
      <p>Already have an accout? <button onClick={() => onFormSwitch('login')}>Login here</button></p>
    </div>
  )
}
export default Register