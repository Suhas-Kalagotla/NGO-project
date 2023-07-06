import react from 'react';
import './field.css'
const Field =({label,value})=>{
  return(
    <div id="field">
      <p id="label">{label}</p>
      <p id="value">{value}</p>
    </div>
  )
}

export default Field; 