import express from "express";
import saveImageUrl from "../controllers/imageController/saveImageUrl.js";
import getImagesByUserId from "../controllers/imageController/getImagesByUserId.js";


const router = express.Router()


router.post("/", saveImageUrl)

router.get("/:userId", getImagesByUserId)

export default router