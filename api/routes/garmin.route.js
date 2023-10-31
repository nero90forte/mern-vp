import express from 'express';
import { 
    getPingbodycomposition,
    getPingdailies,
    getPingderegistration,
    getPingepochs,
    getPingpulseox,
    getPingrespiration,
    getPingsleeps,
    getPingstress,
    getPingthirdpartydailies,
    getPinguser,
    getPingusermetrics
     } from '../controllers/garmin.controller.js';

const router = express.Router();

router.post("/getPingbodycomposition", getPingbodycomposition);
router.post("/getPingdailies", getPingdailies);
router.post("/getPingderegistration", getPingderegistration);
router.post("/getPingepochs", getPingepochs);
router.post("/getPingpulseox", getPingpulseox);
router.post("/getPingrespiration", getPingrespiration);
router.post("/getPingsleeps", getPingsleeps);
router.post("/getPingstress", getPingstress);
router.post("/getPingthirdpartydailies", getPingthirdpartydailies);
router.post("/getPinguser", getPinguser);
router.post("/getPingusermetrics", getPingusermetrics);

export default router;