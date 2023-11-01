import express from "express";
import { register } from "../controllers/userController/register.js";
import { verifyEmail } from "../controllers/userController/verifyEmail.js";
import { login } from "../controllers/userController/login.js";

const router = express.Router()


router.post('/register', register)

router.get('/verifyemail', verifyEmail)

router.post('/login', login) 

export default router