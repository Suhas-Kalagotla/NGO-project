import react from 'react'; 
import { Route } from 'react-router-dom';
const AllRoutes = ({path,element,user})=>{
  return <Route path={path} element ={element}/>
}
export default AllRoutes; 