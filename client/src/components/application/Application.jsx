import react,{useEffect,useState} from 'react'
import './application.css';
import Field from './Field';
import down from '../../images/down.png';
const Application =({data})=>{
   console.log(data);
  return(
    <>
    <div className="appContainer">
      <div className="status">
        <Field label="Name:" value={data.name}></Field>
        <Field label="Application:" value="Scholarship"></Field>
        <Field label="Status:" value="Pending"></Field>
      </div>
      <div className="personDetails">
        <Field label="Email:" value={data.email}></Field>
        <Field label="Father Name:" value={data.fatherName}></Field>
        <Field label="Mother Name:" value ={data.motherName}></Field>
        <img src={down} className="icon"/>
      </div>
      <div className="appDetails">
      </div>
    </div>
    </>
  )
}

export default Application;