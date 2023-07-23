import react from 'react'; 
import FormInput from '../formInput/FormInput';
import {useNavigate} from 'react-router-dom'
import * as Yup from "yup"; 
import {Formik, Field} from "formik";
import Select from "react-select"; 
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
  type:"Scholarship",
  qualification:"",
  prevQualification:"",
  description:"",
}

export const validation = Yup.object({
  name:Yup.string().min(2).max(25).required("Please Enter your Name"),
  gender:Yup.string().required("Please Enter Gender"),
  number:Yup.number().required("Please Enter Phone Number"),
  address:Yup.string().required("Please Enter Address"),
  type:Yup.string().required("Please select Type"),
  qualification:Yup.string().required("Please Enter Qualification"),
  prevQualification:Yup.string().required("Please Enter Previous Qualification"),
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
        {({handleSubmit, errors,setFieldValue,values})=>{
          return(
            <form noValidate onSubmit={handleSubmit} className="applicationForm">
              <div className ="basicDetails">
                <h2 className="heading">Basic Details</h2>
                <div className ="mainContent">
                  <div className="div1">
                  <FormInput label="Name" name="name" placeholder="surname name"/>
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
                  onChange={()=>{initialValues.gender="others"}}
                  type="radio"
                  name="gender"
                  className="gender"
                  value="others"/>Others
                  </label>
                  </div>
                  </div>
                  <div className="div2">
                  <FormInput label="Mobile no." name="number" type="number" placeholder=""/>
                  <FormInput label="Address for Correspondence:" name="address" type="text" placeholder="Full Address"/>
                  </div>
                </div>  
              </div>
              <div className = "renderForm">
                <div className="selectForm">
                    <label htmlFor="type">Application for : </label>
                    <Field as="select" name="type" className="type"
                      style={{ height: '40px' }}
                      onChange={(e) => {
                        setFieldValue('type', e.target.value);
                      }}
                    >
                      <option value="Scholarship">Scholarship</option>
                      <option value="Infrastructure">School Infrastructure</option>
                      <option value="Programm">Awareness Programm</option>
                    </Field>
                </div>
                { 
                  values.type==="Scholarship" && 
                  <div className="scholarship">
                    <div className="div1">
                      <FormInput label="Qualification" name="qualification" type="text" placeholder=""/>
                      <FormInput label="Previous Qualification" name="prevQualification" type="text" placeholder=""/>
                    </div>
                    <div className="div2">
                      <label>Reason for application</label>
                      <div className="textAreaWrapper">
                      <Field as="textarea" name="description"
                      placeholder="Enter your response">

                      </Field>
                      </div>
                    </div>
                  </div>
                }
                {
                  values.type==="Infrastructure" && 
                  <div className="infrastructure">
                    <p>infrastructure</p>
                  </div>
                } 
                {
                  values.type==="Programm" && 
                  <div className="programm">
                    <p>programm</p>
                  </div>
                }
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