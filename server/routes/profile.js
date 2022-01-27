import express from 'express';
import { getProfile, createProfile, getProfileById } from '../controllers/profile.js';

const router = express.Router();

router.get('/usr', getProfile);
router.get('/usrbyid', getProfileById);
router.post('/createusr', createProfile);
export default router;