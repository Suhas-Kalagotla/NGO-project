import React from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom"; 
import {Profile} from "../avatar/Profile"; 
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

function NavComp() {
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/login");
  }
  const token = localStorage.getItem("token")
  return (
    <nav>
      <Link to="/">
        <p id="logo">Logo</p>
      </Link>{/*image tag */}
      <ul className="nav__links">
        <li><Link to ="/request">Request</Link> </li>
        <li><Link to ="#">About</Link> </li>
        <li><div>
        {token ? (
          <div className="profile">
            <Profile className="avatar" alt="suhas" src="" logout={logout}>suhas</Profile>
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