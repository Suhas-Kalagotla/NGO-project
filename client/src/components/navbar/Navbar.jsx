import React,{Component} from 'react';
import {Link} from "react-router-dom"; 
import "./navbar.css"
function NavComp() {
  return (
    <div className="navbar_container">
    <Link to="/"><p id="logo">Logo</p></Link>{/*image tag */}
    <nav>
      <ul className="nav__links">
        <li><a href ="#">Services</a> </li>
        <li><a href ="#">About</a> </li>
        <a class="bta" ><Link to="/login"><button className="navbar_btn">Login</button></Link></a>
      </ul>
    </nav>
      
    </div>
  );
}

export default NavComp;