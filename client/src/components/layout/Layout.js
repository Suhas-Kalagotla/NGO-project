import "./layout.css"; 
import react from 'react'; 
import Header from './Header';
import {Sidebar} from './Sidebar';
export const Layout =({children})=>{
  return(
  <>
  <Header/>
  <Sidebar/>
  <div className="main_container">{children}</div>
  </>  
  )
}