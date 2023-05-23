import express from 'express'
import {CreateApplication, GetApplication} from '../controllers/application.js'

const router = express.Router();

router.post("/form",CreateApplication);
router.post("/applications",GetApplication);
export default router;