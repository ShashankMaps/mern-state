import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

//now we have to make call for conatroller
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google)


export default router;