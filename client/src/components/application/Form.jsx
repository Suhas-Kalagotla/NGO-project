import react from 'react'; 
import FormInput from './FormInput';
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
import {Formik} from "formik";
import axios from 'axios';

const initialValues={
  name:"",
  fatherName:"",
  motherName:"",
  gender:"",
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
            <h2>Basic Details</h2>
            <FormInput label="Name" name="name" placeholder="surname name"/>
            <FormInput label="Father's Name" name="fatherName" placeholder="surname name"/>
            <FormInput label="Mother's Name" name="motherName" placeholder="surname name"/>
            <FormInput label="Gender" name="gender" placeholder="Male or Female"/>
            <FormInput label="Date of Birth" name="dob" placeholder="DD/MM/YYYY"/>
            <FormInput label="Category" name="category" placeholder="SC/ST/OBC/SEBC"/>
            <FormInput label="Religion" name="religion" placeholder="Hindu/Christian/Muslim"/>
            <FormInput label="Special Category" name="specialCategory" placeholder="Blind/Deaf"/>
            <FormInput label="Mobile no." name="number" placeholder=""/>
            <FormInput label="Adhar Card (UID) No" name="adharNumber" placeholder=""/>
            <h2>Address Details</h2>
            <FormInput label="Address for Correspondence:" name="address" placeholder="Full Address"/>
            <FormInput label="District" name="district" placeholder=""/>
            <FormInput label="Pin Code" name="pincode" placeholder=""/>
            <FormInput label="State" name="state" placeholder=""/>
            <FormInput label="Permanent Address" name="permanentAddress" placeholder=""/>
            <FormInput label="District" name="permanentDistrict" placeholder=""/>
            <FormInput label="Pin Code" name="permanentPinCode" placeholder=""/>
            <FormInput label="State" name="permanentState" placeholder=""/>
            <h2>Educational Details</h2>
            <FormInput label="Present Class" name="class" placeholder="10th or inter"/>
            <FormInput label="Previous Class Marks" name="previousMarks" placeholder="gps or marks"/>
            <button type="submit">Apply</button>
          </form>
          )
        }}

  </Formik>
  </div>
  )
}



export default Form; 