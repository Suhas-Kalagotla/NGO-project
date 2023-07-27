import express from 'express'
import {counter} from "../controllers/user.js"
const router = express.Router()

router.post("/count",counter); 
export default router; 