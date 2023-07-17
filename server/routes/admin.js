import express from "express"; 
import {getCount,getApp,appDelete} from "../controllers/admin.js";

const router = express.Router();

router.post("/dashboard/count",getCount); 
router.post("/application/getApp",getApp); 
router.post("/application/appDelete",appDelete); 
export default router ; 