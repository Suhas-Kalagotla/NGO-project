import React,{useState,useEffect,useRef} from 'react'; 
import './profile.css'; 

import user from "../../images/user.png"; 
import settings from "../../images/settings.png"; 
import edit from "../../images/edit.png"; 
import logout_logo from "../../images/logout.svg"; 

export const Profile =({src,name,logout})=>{
  const [open,setOpen] = useState(false); 
  const handleOnError=(e)=>{
    e.target.src= {user}
  }

  const menuRef = useRef(); 
  
  useEffect(()=>{
    const handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false); 
      }
      };
    document.addEventListener("mousedown",handler); 

    return()=>{
      document.removeEventListener("mousedown",handler); 
    }
  })

  return(
    <div className="menu_container" ref={menuRef}>
      <div className="menu_trigger" onClick={()=>{(setOpen(!open))}}>
      {src ? (<img className ={`profile_img`} src={src} alt={name}/>
      ):(
        <img className ={`profile_img`}
        src={user}
        alt={name}
        onError={handleOnError}
        />
      )}
      </div>
      <div className ={`dropdown_menu ${open?"active" : "inactive"}`}>
        <ul>
          <li className = "dropdownItem">
            <img src={user}/>
            <a>My Profile</a>
          </li>
          <li className = "dropdownItem">
            <img src={edit}/>
            <a>Edit Profile</a>
          </li>
          <li className = "dropdownItem">
            <img src={settings}/>
            <a>Settings</a>
          </li>
          <li className = "dropdownItem" id="logout">
            <button onClick={logout}><img src={logout_logo}/> Logout</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
