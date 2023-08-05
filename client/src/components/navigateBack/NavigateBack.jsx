import {useNavigate} from "react-router-dom"; 
import "./navigate.css"; 
import Left from "../../images/left.svg"; 

const NavigateBack=()=>{
  const navigate = useNavigate(); 
  const handleNavigateBack =  () =>{
    navigate(-1); 
  }
  return (
    <button className ="back" onClick={handleNavigateBack}><img src={Left}/></button>
  )
}

export default NavigateBack; 