import './divs.css'
import React from 'react'; 
import {useNavigate} from 'react-router-dom'; 

const Divs = (props)=>{
  const navigate = useNavigate(); 
  const navigateApp = ()=>{
    navigate("/application")
  }
  return(
    <>
    {props.direction==="right" ? (
      <div className="skewed">
        <div className="text">
          <div>
          <small>{props.title}</small>
          <h1>{props.heading}</h1>
          </div>
          <div>
          <p>{props.para}</p>
          </div>
          <div className="links">
            <a href="#">Read More &rarr;</a>
            <button className="apply_btn" onClick={navigateApp}>Apply now</button>
          </div>
        </div>
        <div className="image">
            <img src={props.src} alt="img"/>
        </div>
      </div> 
    ):(
      <div className="skewed skewed-left">
        <div className="image">
          <img src={props.src} alt="img"/>
        </div>
        <div className="text">
          <small>{props.title}</small>
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
          <div className="links">
          <a href="#">Read More &rarr;</a>
          <button className="apply_btn" onClick={navigateApp}>Apply now</button>
          </div>
        </div>
      </div>
    )}
    </>
  )

}

export default Divs; 