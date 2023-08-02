import express from "express"
import { fetchAssignedApp } from "../controllers/volunteer.js";

const router = express.Router(); 

router.post("/fetchAssignedApp",fetchAssignedApp) ;

export default router ; 