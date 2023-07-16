import React from 'react';
import {Link} from "react-router-dom"; 
import {Profile} from "../profile/Profile"; 
import { useNavigate } from 'react-router-dom';
import "./navbar.css";

function NavComp({setToken}) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"));
  const logOut=()=>{
    setToken(""); 
    localStorage.clear();
    navigate("/login");
  }
  return (
    <nav>
      <Link to="/">
        <p id="logo">Logo</p>
      </Link>{/*image tag */}
      <ul className="nav__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/application">Application</Link> </li>
        <li><Link to ="#">About</Link> </li>
      </ul>
      <div>
        {
        token ? (
            <Profile 
            name={`${user.name}`} 
            alt="" src="" 
            logout={logOut}
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