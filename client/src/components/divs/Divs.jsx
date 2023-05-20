import './divs.css'
import React from 'react'; 
import {Link} from 'react-router-dom'; 

const Divs = (props)=>{
  return(
    <div className="everthing">
    {props.direction==="right" ? (
      <div className="skewed">
      <div className="text">
        <small>{props.title}</small>
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
        <div className="links">
        <a href="#">Read More &rarr;</a>
        <button className="apply_btn"><Link to ="/application/form">Apply now </Link></button>
        </div>
      </div>
      <div className="image">
        <div>
          <img src={props.src} alt="img"/>
        </div>
      </div>
    </div> 
    ):(
      <div className="skewed skewed-left">
        <div className="image">
        <div>
          <img src={props.src} alt="img"/>
        </div>
      </div>
      <div className="text">
        <small>{props.title}</small>
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
        <div className="links">
        <a href="#">Read More &rarr;</a>
        <button className="apply_btn"><Link to ="/application">Apply now</Link></button>
        </div>
      </div>
      </div>
    )}
    </div>
  )

}

export default Divs; 