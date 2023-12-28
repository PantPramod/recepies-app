import express from "express";
import getAllContacts from "../controllers/contactController/getAllContacts.js";
import saveContact from "../controllers/contactController/saveContact.js";



const router = express.Router()

router.get('/', getAllContacts)

router.post("/", saveContact)



export default router