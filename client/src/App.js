import './App.css';
import {
  Navbar , Login ,Register,Applications,Form,Home,
  PrivateRoute,Dashboard,AdminApplications,
  Volunteers,Sidebar,PageNotFound,Money,AppId,Report
} from "./components";
import React,{useState}from 'react'; 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App(){
  const toggleForm =(formName)=>{
    setCurrentForm(formName); 
  }
  const [token,setToken] = useState(localStorage.getItem("token")); 
  const [currentForm,setCurrentForm] = useState('login');
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="app">
      <Router>
      {user?.role !== "admin" && <Navbar setToken={setToken}/>}
        <Routes>
          <Route path="/pagenotfound" element={<PageNotFound/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element=
          {
          currentForm==="login"?<Login onFormSwitch={toggleForm} setToken={setToken}/>:<Register onFormSwitch={toggleForm}/>
          }/>
          <Route path="/application" element={<PrivateRoute/>}>
            <Route path="/application" element={<Applications/>}/>
            <Route path="/application/form" element ={<Form/>}/>
          </Route>
          <Route path="/volunteer" element={<PrivateRoute userRole="volunteer"/>}>
            <Route path="/volunteer/report" element ={<Report/>}></Route>
          </Route>
          <Route path="/admin" element={<Sidebar setToken={setToken}><PrivateRoute userRole="admin"/></Sidebar>}>
            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            <Route path="/admin/applications" element={<AdminApplications/>}/>
            <Route path="/admin/volunteers" element={<Volunteers/>}/>
            <Route path="/admin/money" element ={<Money/>}></Route>
            <Route path="/admin/applications/:id" element={<AppId/>}></Route>
          </Route> 
        </Routes>
      </Router>
    </div>  
  );
}
export default App;
