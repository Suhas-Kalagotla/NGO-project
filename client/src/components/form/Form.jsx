import react from 'react'; 
import FormInput from '../formInput/FormInput';
import {useNavigate} from 'react-router-dom'
import * as Yup from "yup"; 
import {Formik} from "formik";
import axios from 'axios';
import { url } from '../../utils/url';
import "./form.css"

const user = JSON.parse(localStorage.getItem("user"));
const userEmail=user?.email;

const initialValues={
  email:userEmail,
  name:"",
  gender:"male",
  number:"",
  address:"",
  status:"Pending",
  
}

export const validation = Yup.object({
  name:Yup.string().min(2).max(25).required("Please Enter your Name"),
  gender:Yup.string().required("Please Enter Gender"),
  number:Yup.number().required("Please Enter Phone Number"),
  address:Yup.string().required("Please Enter Address"),
});


const Form =()=>{
  
  const navigate = useNavigate(); 
  return(
     
    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit ={async(values)=>{
        const response = await axios.post(`${url}/application/form`,values);
        navigate("/application");
      }}
      >
        {({handleSubmit, errors})=>{
          return(
            <form noValidate onSubmit={handleSubmit} className="applicationForm">
              <div className ="basicDetails">
                <h2 className="heading">Basic Details</h2>
                <div className ="mainContent">
                  <div className="div1">
                  <FormInput label="Name" name="name" placeholder="surname name"/>
                  <div>
                  <label>Gender</label>
                  <div className="options">
                  <label>
                  <input 
                  defaultChecked = {initialValues.gender==="male"}
                  type="radio"
                  name="gender"
                  className="gender"
                  value="male"/>Male
                  </label>
                  <label>
                  <input 
                  onChange={()=>{initialValues.gender="female"}}
                  type="radio"
                  name="gender"
                  className="gender"
                  value="female"/>Female
                  </label>
                  <label>
                  <input 
                  onChange={()=>{initialValues.gender="female"}}
                  type="radio"
                  name="gender"
                  className="gender"
                  value="others"/>Others
                  </label>
                  </div>
                  </div>
                  </div>
                  <div className="div2">
                  <FormInput label="Mobile no." name="number" type="number" placeholder=""/>
                  <FormInput label="Address for Correspondence:" name="address" type="text" placeholder="Full Address"/>
                  </div>
                </div>  
              </div>

              <button type="submit" className="formSubmit">Apply</button>
            </form>
          )
        }}

  </Formik>

  </div>
  )
}



export default Form; 