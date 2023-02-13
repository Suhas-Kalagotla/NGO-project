import React,{Component} from 'react';
import "./navbar.css"
function NavComp() {
  return (
    <div className="container">
    <p>Logo</p>{/*image tag */}
    <nav>
      <ul className="nav__links">
        <li><a href ="#">Services</a> </li>
        <li><a href ="#">About</a> </li>
        <a class="bta" ><button>Login</button></a>
      </ul>
    </nav>
      
    </div>
  );
}

export default NavComp;