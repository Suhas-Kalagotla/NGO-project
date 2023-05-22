import express from 'express'
import Application from '../controllers/application'

const router = express.Router();

router.post("/form",Application);

export default router;