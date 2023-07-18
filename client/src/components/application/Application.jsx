import react,{useEffect,useState} from 'react'
import './application.css';
import down from '../../images/down.svg';
const Application =({data,index})=>{
  
  return(
        <tr className="row">
          <td>{index+1}</td>
          <td>{data.type}</td>
          <td>{data.updatedAt.slice(0,10)}</td>
          <td>{data.status}</td>
        </tr>
  ) 
}

export default Application;