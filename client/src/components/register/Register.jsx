import React, { useState ,useEffect} from 'react';
import "./register.css";
import Exclamation from "../../images/exclamation.png";
import axios from "axios"; 
import {useNavigate} from "react-router-dom"; 
import {url} from "../../utils/url";

const Register = ({ onFormSwitch }) => {
  const initialValues = { name: "", email: "", pass: "", conPass: "",role:"user",number:null};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const radioChange =(e)=>{
    setFormValues({...formValues,role:e.target.value}); 
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmit(true); 
    const errors = validate(formValues);
    if(Object.keys(errors).length===0){
      const response = await axios.post(`${url}/auth/register`,formValues)
      onFormSwitch('login');
    }
  };

  useEffect(() => {
    if(isSubmit) {
      validate(formValues); 
    } 
  }, [formValues]);
  
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
    }else if(values.conPass !== values.pass){
      errors.conPass = "Password does not match"; 
    }
    if(values.role==="volunteer"){
    if(!values.number){
      errors.number="Please Enter Number"
    }else if(values.number.toString().length !==10){
      errors.number="Please Enter Valid Number"
    }
  }
    setFormErrors(errors); 
    return errors; 
  };
  
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className={`formControl ${formErrors.name && "fail"}`}>
          <label htmlFor="name">Full name</label>
          <input value={formValues.name}
            onChange={handleChange}
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.name}</small>
        </div>
        <div className={`formControl ${formErrors.email && "fail"}`}>
          <label htmlFor="email">Email</label>
          <input value={formValues.email}
            onChange={handleChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email" name="email"
          />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.email}</small>
        </div>

        <div className={`formControl ${formErrors.pass && "fail"}`}>
          <label htmlFor="password">Password</label>
          <input value={formValues.pass}
            onChange={handleChange}
            type="password"
            placeholder="****"
            id="password"
            name="pass" />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.pass}</small>
        </div>

        <div className={`formControl ${formErrors.conPass && "fail"}`}>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input value={formValues.conPass}
            onChange={handleChange}
            type="password"
            placeholder="****"
            id="confirm_password"
            name="conPass"
          />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.conPass}</small>

        <div className="radioBtns">
          <label>
          <input type="radio" className="radioBtn" value = "user" name="role"
          checked ={formValues.role==="user"}
          onChange={radioChange}
          />User
          </label>
          <label>
          <input type="radio" className="radioBtn" value = "volunteer" name ="role" 
          onChange ={radioChange}
          checked={formValues.role==="volunteer"}
          />Volunteer
          </label>
        </div>
        </div>

        { formValues.role==="volunteer" &&  

          <div className={`formControl ${formErrors.number && "fail"}`}>
          <label htmlFor="number">Contact number</label>
          <input value={formValues.number}
            onChange={handleChange}
            id="number"
            name="number"
            type="number"
          />
          <img className="exclamation" src={Exclamation} />
          <small className="error">{formErrors.number}</small>
          </div>
        }

        <button>Register</button>
      </form>
      <p>Already have an accout? <a onClick={() => onFormSwitch('login')}>Login here</a></p>
    </div>
  )
}
export default Register