import React from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom"; 
import {Profile} from "../profile/Profile"; 
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

function NavComp() {
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/login");
  }
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav>
      <Link to="/">
        <p id="logo">Logo</p>
      </Link>{/*image tag */}
      <ul className="nav__links">
        <li><Link to ="/application">Application</Link> </li>
        <li><Link to ="#">About</Link> </li>
      </ul>
      <div>
        {
        token ? (
            <Profile 
            name={`${user.name}`} 
            alt="" src="" 
            logout={logout}
            />
        ):(
          <Link to="/login"><button className="navbar_btn">Login</button></Link>
        )
        }
      </div>
    </nav>
  );
}

export default NavComp;