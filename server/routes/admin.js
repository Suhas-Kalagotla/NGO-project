import express from "express"; 
import {getCount,getApp,appDelete, countUser,getDetails} from "../controllers/admin/admin.js";
import { moneyFetch,updateBalance } from "../controllers/admin/money.js";
import {fetchVolunteers,assignVolunteer} from "../controllers/admin/volunteers.js"; 
const router = express.Router();

router.post("/dashboard/count",getCount); 
router.post("/application/getApp",getApp); 
router.post("/application/appDelete",appDelete); 
router.post("/countUser",countUser); 
router.post("/money/info",moneyFetch); 
router.post("/money/updateBalance",updateBalance); 
router.post("/application/getDetails",getDetails); 
router.post("/volunteers",fetchVolunteers); 
router.post("/assignVolunteer",assignVolunteer); 
export default router ;   