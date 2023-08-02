import react, { useState } from 'react'
import dashboardIcon from "../../images/dashboard.svg";
import appIcon from "../../images/applications.svg";
import volunteerIcon from "../../images/volunteers.svg";
import bars from "../../images/bars.svg";
import logout from "../../images/logout.svg";
import money from "../../images/money.svg";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = ({ children, setToken }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const logOut = () => {
    setToken("");
    localStorage.clear();
    navigate("/login");
  }
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      icon: dashboardIcon,
    },
    {
      path: "/admin/applications",
      name: "Applications",
      icon: appIcon,
    },
    {
      path: "/admin/volunteers",
      name: "Volunteers",
      icon: volunteerIcon,
    },
    {
      path: "/admin/money",
      name: "Money",
      icon: money,
    }
  ]
  return (
    <div className="sideBarContainer">
      <div className="sidebar" style={{ width: isOpen ? "300px" : "60px" }}>
        <div>
          <div className="topSection">
            <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>Logo</h1>
            <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }} onClick={toggle}><img src={bars} /></div>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} 
              className={`link ${location.pathname.startsWith(item.path) && "something"} `} >
                <div className="icon"><img src={item.icon} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="linkText"><p>{item.name}</p></div>
              </NavLink>
            ))
          }
        </div>
        <div>
          <button className="logout" onClick={logOut}>
            <div className="icon"><img src={logout} /></div>
            <div className="linkText" style={{ display: isOpen ? "block" : "none" }}>Logout</div>
          </button>
        </div>
      </div>
      <main className="mainSidebar">{children}</main>
    </div>
  );
};

export default Sidebar; 