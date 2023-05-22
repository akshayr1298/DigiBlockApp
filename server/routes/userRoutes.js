import express from "express";
import { verifyToken } from "../auth/auth.js";
import { createApi, createCanidate, getTrustScore, searchRooms, signIn, signUp, subcribtion } from "../controler/userControler.js";

const router = express.Router();

router.post("/", signUp);
router.post("/login", signIn);
router.post('/rooms',verifyToken,searchRooms)
router.post('/subscribe',verifyToken,subcribtion)
router.post('/create',createCanidate)
router.post('/createapi',createApi)
router.get('/get/v1/',getTrustScore)


export default router;
