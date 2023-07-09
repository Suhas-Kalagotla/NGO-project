import './App.css';
import {
  Navbar , Login ,Register,Applications,Divs,Form,
  UserRoute,Home,Admin,AdminRoute,Dashboard,AdminApplications,
  Volunteers,Sidebar
} from "./components";
import React,{useState,useEffect}from 'react'; 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App(){
  const toggleForm =(formName)=>{
    setCurrentForm(formName); 
  }
  const [currentForm,setCurrentForm] = useState('login');
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="app">
      <Router>
        <>
            <Navbar/>
            <Routes>  
                <Route path="/login" element=
                {
                currentForm==="login"?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
                }/>
                <Route path="/application" element={
                  <UserRoute>
                    <Applications/>
                  </UserRoute>
                }/>
                <Route path="/application/form" element ={
                  <UserRoute>
                    <Form/>
                  </UserRoute>
                }/>
                
                <Route path="/" element={
                  <Home/>
                }/>
            </Routes>
        {/* {
          user?.role==="admin" && (
            <Sidebar>
            <Routes>
            <Route path="/login" element=
                {
                currentForm==="login"?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
            }/>
            <Route path="/admin" element={
              <Admin/>
            }/>  
            <Route path="/admin/dashboard" element={
              <AdminRoute>
                <Dashboard/>
              </AdminRoute>
            }/>
            <Route path="/admin/applications" element={
              <AdminRoute>
                <AdminApplications/>
              </AdminRoute>
            }/>
            <Route path="/admin/volunteers" element={
              <AdminRoute>
                <Volunteers/>
              </AdminRoute>
            }/>
            </Routes>
            </Sidebar>
          )
          } */}
      </>
      </Router>
    </div>
  );
}
export default App;
