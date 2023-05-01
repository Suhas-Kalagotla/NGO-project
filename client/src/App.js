import './App.css';
import {Navbar , Login ,Register,Requests} from "./components";
import React,{useState,useEffect}from 'react'; 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App(){
  const toggleForm =(formName)=>{
    setCurrentForm(formName); 
  }
  const [currentForm,setCurrentForm] = useState('login');
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.role);
  return (
    <div class ="app">
      <Router>
        {user?.role !=="admin" && <Navbar/>}
        <Routes>
        <Route path="/login" element={
        currentForm==="login"?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
        }/>
        <Route path="/request" element={<Requests/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
