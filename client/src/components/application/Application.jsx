import react,{useEffect,useState} from 'react'
import './application.css';
import Field from '../field/Field';
import down from '../../images/down.png';
const Application =({data,index})=>{
  
  return(
    <tr key={index} className="row">
      <td>{data.name}</td>
      <td>{data.updatedAt.slice(0,10)}</td>
      <td>{data.email}</td>
    </tr>
  ) 
}

export default Application;