import express from 'express';
import { signOut, signin, signup, google } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get('/signout', signOut)
router.get('/google', google)

export default router;