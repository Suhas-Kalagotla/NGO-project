import React from 'react';
import {Link} from "react-router-dom"; 
import {Avatar} from "../avatar/Avatar"; 
import "./navbar.css"
function NavComp() {

  const user =null; 

  return (
    <nav>
      <Link to="/"><p id="logo">Logo</p></Link>{/*image tag */}
      <ul className="nav__links">
        <li><Link to ="/request">Request</Link> </li>
        <li><Link to ="#">About</Link> </li>
        <li><div>
        {user ? (
          <div className="profile">
            <Avatar className="avatar" alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
            <p>{user.result.name}</p>
            <button className="logout" >Logout</button>
          </div>
        ):(
          <Link to="/login"><button className="navbar_btn">Login</button></Link>
        )}
      </div></li>
      </ul>
    </nav>
  );
}

export default NavComp;