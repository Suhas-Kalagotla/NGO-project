import {useState,useEffect} from 'react';
import axios from 'axios';
import { url } from '../../utils/url';
import PlusSolid from "../../images/plusSolid.svg" ; 
import Loading from "../loading/Loading"; 
import "./money.css"; 
const Money = () =>{
  const user = JSON.parse(localStorage.getItem("user")); 
  const [activeDiv, setActiveDiv] = useState("all"); 
  const [addActive,setAddActive] = useState("true"); 
  const [money,setMoney] = useState(null); 

  const handleAddAmount =async (amountToAdd) =>{
    if(amountToAdd <=0){
      alert('Please Enter valid positive amount.'); 
      return ; 
    }
    setMoney((prevMoney)=>({
      ...prevMoney, 
      Balance: prevMoney.Balance + amountToAdd ,
    }))

    try{
      const response = await axios.post(`${url}/admin/money/updateBalance`,{
      email:user.email,
      role:user.role, 
      amount : amountToAdd, 
    });
    }catch(err){
      console.log("Error updating Balance: ", err); 
      setMoney((prevMoney) => ({
        ...prevMoney,
        Balance: prevMoney.Balance - amountToAdd,
      }));
    }
    toggleForm(); 
  }
  const moneyFetch = async () =>  {
    try{
      const response =await  axios.post(`${url}/admin/money/info`,{
        role:user.role, 
        email:user.email,
      })
      if(response.status===200) {
        setMoney(response.data.money); 
      }
    }catch(err){
      console.log(err); 
    }
  }
  useEffect(()=>{
    moneyFetch(); 
  },[]);
  const handleChangeDiv =(changeTo)=>{
    setActiveDiv(changeTo)
  }
  const toggleForm = ()=>{
    setAddActive(!addActive);   
  }
  return(
    <div className="moneyContainer">
      <div className="moneyHeading">
        <h2>Money</h2>
        <hr></hr>
      </div>

      <div className="moneyBody">
      <div className="moneyControllers">
        <div className={`moneyButton ${activeDiv==="all" && "isSelected"}`} onClick={()=>{handleChangeDiv("all")}}>All</div>
        <div className={`moneyButton ${activeDiv==="transactions" && "isSelected"}`} onClick={()=>{handleChangeDiv("transactions")}}>Transactions</div>
      </div>
      <div className="moneyContent">
        {
          activeDiv ==="all" && money ? (
          <div className="all">
            <div className="totalMoney">
              <div>
              <div className="balance">
              <p>Balance : {money.Balance} </p>
              <img src={PlusSolid} 
               
              onClick={toggleForm}/>
              </div>
              <form className={`${addActive==='true' && "addActive"}`}
                onSubmit={(e)=>{
                  e.preventDefault(); 
                  const amountToAdd = parseFloat(e.target.elements.amount.value);
                  handleAddAmount(amountToAdd); 
                  e.target.reset(); 
                }}>
                  <input type="number" name ="amount" step="0.01" required/>
                  <button type="submit">Add</button>
              </form>
              </div>
              <p>Total Money Spent:{money.TotalAmount} </p>
            </div>
          </div>
          ):(
            <Loading/>
          )
        }
        {
          activeDiv==="transactions" && 
          <div className="transactions">
            
          </div>
        }
      </div>
      </div>
    </div>
  ); 
}

export default Money ; 