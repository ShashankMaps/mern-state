import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

//now we have to make call for conatroller
router.post("/signup", signup)

export default router;