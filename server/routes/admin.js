import express from "express"; 
import {getCount} from "../controllers/admin.js";

const router = express.Router();

router.post("/dashboard/count",getCount); 
export default router ; 