import express from 'express';
import { getComplaint , createComplaint} from '../controllers/complaint.js';

const router = express.Router(); 

router.get('/',getComplaint);
router.post('/',createComplaint); 

export default router; 