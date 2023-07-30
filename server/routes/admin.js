import express from "express"; 
import {getCount,getApp,appDelete, countUser} from "../controllers/admin.js";
import { moneyFetch,updateBalance } from "../controllers/money.js";
const router = express.Router();

router.post("/dashboard/count",getCount); 
router.post("/application/getApp",getApp); 
router.post("/application/appDelete",appDelete); 
router.post("/countUser",countUser); 
router.post("/money/info",moneyFetch); 
router.post("/money/updateBalance",updateBalance); 
export default router ;   