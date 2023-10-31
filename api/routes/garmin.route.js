import express from 'express';
import { getPing } from '../controllers/garmin.controller.js';

const router = express.Router();

router.post("/getPing", getPing);


export default router;