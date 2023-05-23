import react from 'react'; 
import FormInput from './FormInput';
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
import {Formik,Field} from "formik";
import axios from 'axios';
import "./form.css"


const initialValues={
  name:"",
  fatherName:"",
  motherName:"",
  gender:"male",
  dob:"",
  category:"",
  religion:"",
  specialCategory:"",
  number:"",
  adharNumber:"",
  address:"",
  district:"",
  pinCode:"",
  state:"",
  permanentAddress:"",
  permanentDistrict:"",
  permanentPinCode:"",
  permanentState:"",
  class:"",
  previousMarks:"",
}

export const validation = Yup.object({
  name:Yup.string().min(2).max(25).required("Please Enter your Name"),
  fatherName:Yup.string().min(2).max(25).required("Please Enter your Father Name"),
  motherName:Yup.string().min(2).max(25).required("Please Enter your Mother Name"),
  gender:Yup.string().required("Please Enter Gender"),
  dob:Yup.string().required("Please Enter Date of Birth"),
  category:Yup.string().required("Please Enter Category"),
  religion:Yup.string().required("Please Enter Religion"),
  specialCategory:Yup.string(),
  number:Yup.number().required("Please Enter Number"),
  address:Yup.string().required("Please Enter Address"),
  district:Yup.string().required("Please Enter District"),
  adharNumber:Yup.string().required("Please Enter Adhar Number"),
  pincode:Yup.string().required("Please Enter Pincode"),
  state:Yup.string().required("Please Enter State"),
  permanentAddress:Yup.string().required("Please Enter Address"),
  permanentState:Yup.string().required("Please Enter State"),
  permanentPinCode:Yup.string().required("Please Enter PinCode"),
  permanentDistrict:Yup.string().required("Please Enter District"),
  class:Yup.string().required("Please Enter Class"),
  previousMarks:Yup.string().required("Please Enter Marks"),


});


const Form =()=>{
  return(
    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit ={async()=>{
        const response = await axios.post("http://localhost:5000/application/form",initialValues);
      }}
      >
        {({handleSubmit, errors})=>{
          console.log(errors); 
          return(
            <form novalidate onSubmit={handleSubmit}>
            <h2 className="heading">Basic Details</h2>
            <FormInput label="Name" name="name" placeholder="surname name"/>
            <FormInput label="Father's Name" name="fatherName" placeholder="surname name"/>
            <FormInput label="Mother's Name" name="motherName" placeholder="surname name"/>
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
            type="radio"
            name="gender"
            className="gender"
            value="female"/>Female
            </label>
            </div>
            </div>
            <FormInput label="Date of Birth" name="dob" type="text" placeholder="DD/MM/YYYY"/>
            <FormInput label="Category" name="category" type="text" placeholder="SC/ST/OBC/SEBC"/>
            <FormInput label="Religion" name="religion" type="text" placeholder="Hindu/Christian/Muslim"/>
            <FormInput label="Special Category" name="specialCategory" type="text" placeholder="Blind/Deaf"/>
            <FormInput label="Mobile no." name="number" type="number" placeholder=""/>
            <FormInput label="Adhar Card (UID) No" name="adharNumber" type="number" placeholder=""/>
            <h2 className="heading">Address Details</h2>
            <FormInput label="Address for Correspondence:" name="address" type="text" placeholder="Full Address"/>
            <FormInput label="District" name="district" type="text" placeholder=""/>
            <FormInput label="Pin Code" name="pincode" type="text" placeholder=""/>
            <FormInput label="State" name="state" type="text" placeholder=""/>
            <FormInput label="Permanent Address" name="permanentAddress" type="text" placeholder=""/>
            <FormInput label="District" name="permanentDistrict" type="text" placeholder=""/>
            <FormInput label="Pin Code" name="permanentPinCode" type="text" placeholder=""/>
            <FormInput label="State" name="permanentState" type="text" placeholder=""/>
            <h2 className="heading">Educational Details</h2>
            <FormInput label="Present Class" name="class" type="text" placeholder="10th or inter"/>
            <FormInput label="Previous Class Marks" name="previousMarks" type="text" placeholder="gps or marks"/>
            <button type="submit">Apply</button>
          </form>
          )
        }}

  </Formik>
  </div>
  )
}



export default Form; 