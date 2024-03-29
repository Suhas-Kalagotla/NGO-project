import react,{useEffect,useState} from 'react'
import './application.css';
import down from '../../images/down.svg';
const Application =({data,index})=>{
  const date = data.updatedAt; 
  return(
        <tr className="row">
          <td>{index+1}</td>
          <td>{data.type}</td>
          <td>{date.slice(0,10)}</td>
          <td className={`${data.status==="pending" && "pending"} `}>{data.status}</td>
        </tr>
  ) 
}

export default Application;