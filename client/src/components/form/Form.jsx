import FormInput from '../formInput/FormInput';
import {useNavigate} from 'react-router-dom'
import * as Yup from "yup"; 
import {Formik, Field,useField} from "formik";
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
  schoolName:"",
  schoolLocation:"",
  infraModification:"",
  programmLocation:"",
  volunter:"",
  reportId:"",
}

export const validation = Yup.object({
  name:Yup.string().min(2).max(25).required("Please Enter your Name"),
  gender:Yup.string().required("Please Enter Gender"),
  number:Yup.number().required("Please Enter Phone Number"),
  address:Yup.string().required("Please Enter Address"),
  type:Yup.string().required("Please select Type"),
  description:Yup.string().required("Please Enter your response"),
  qualification:Yup.string().when('type',{
    is:(value)=>value==="Scholarship",
    then:(validation)=>validation.required("Please Enter Qualification"),
  }),
  prevQualification:Yup.string().when('type',{
    is:(value)=>value==="Scholarship",
    then:(validation)=>validation.required("Please Enter Previous Qualification"),
  }),

  schoolName:Yup.string().when('type',{
    is: (value) => value === "Infrastructure", 
    then:(validation)=>validation.required("Please Enter Name of the School"), 
   }),
  schoolLocation:Yup.string().when('type',{
    is:(value)=>value ==="Infrastructure",
    then:(validation)=>validation.required("Please Enter the Location of School"),
  }),
  infraModification:Yup.string().when('type',{
    is: (type) => type === "Infrastructure", 
    then:(validation)=>validation.required("Please Enter the Answer"), 
  }),
  programmLocation:Yup.string().when('type',{
    is:(type)=>type=== "Programm",
    then:(validation)=>validation.required("Please Enter the location"),
  }),
});


const Form =()=>{
  const navigate = useNavigate(); 
  return(

    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit ={async(values)=>{
        try{
          const response = await axios.post(`${url}/application/form`,values);
          if(response.status===201){
            navigate("/application");
          }
        }
        catch(err) {
          alert("Error while submiting the form"); 
          console.log(err); 
        }
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
                      <TextArea name="description"/>
                    </div>
                  </div>
                }
                {
                  values.type==="Infrastructure" && 
                  <div className="infrastructure">
                    <div className="div1">
                      <FormInput label="Name of the School" name="schoolName" type="text" placeholder=""/>
                      <FormInput label="School Location" name="schoolLocation" type="text" placeholder=""/>
                      <FormInput label="Infrastructure to provide / modify" name="infraModification" type="text" placeholder=""/>
                    </div>
                    <div className="div2">
                      <TextArea name="description"/>
                    </div>
                  </div>
                } 
                {
                  values.type==="Programm" && 
                  <div className="programm">
                    <div className="div1">
                    <FormInput label="Programm Location" name="programmLocation" type="text" placeholder=""/>
                    </div>
                    <div className="div2">
                      <TextArea name="description"/>
                    </div>
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
const TextArea = ({name}) =>{
  const [field,meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);
  return(
    <>
      <label>Describe your Requirement</label>
      <div className="textAreaWrapper">
      <Field as="textarea" name={name}
      placeholder="Enter your response"
      id={name}
      className={`${isError && "error"}`}>
      </Field>
      <p className={`${isError && "fail-text"}`}>{isError && meta.error}</p>
      </div>
    </>
  )
}


export default Form; 
