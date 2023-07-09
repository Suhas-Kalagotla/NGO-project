import react from 'react'
import dashboardIcon from "../../images/dashboard.svg"; 
import appIcon from "../../images/applications.svg"; 
import volunteerIcon from "../../images/volunteers.svg"; 
import bars from "../../images/bars.svg";
import { NavLink,useNavigate } from 'react-router-dom';
import "./sidebar.css"; 

const Sidebar = ({children}) =>{
  const navigate = useNavigate(); 
  const logout=()=>{
    localStorage.clear();
    navigate("/login");
  }
  const menuItem=[
    {
      path:"/admin/dashboard",
      name:"dashboard",
      icon:dashboardIcon,
    },
    {
      path:"/admin/applications",
      name:"applications",
      icon:appIcon,
    },
    {
      path:"/admin/volunteers",
      name:"volunteers",
      icon:volunteerIcon,
    },
  ]
  return (
    <div className="sideBarContainer">
      <div className="sidebar">
        <div className="topSection">
          <h1 className="logo">Logo</h1>
          <div className="bars"><img src={bars}/></div>
        </div>
          {
            menuItem.map((item,index)=>(
              <NavLink to={item.path} key={index} className="link" activeclassname="active">
                <div className="icon"><img src={item.icon}/></div>
                <div className="link_text"><p>{item.name}</p></div>
              </NavLink>
            ))
          }
          <button class="logout" onClick={logout}>Logout</button>
        
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar; 