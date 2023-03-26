import express from "express";
import { verifyToken } from "../auth/auth.js";
import { searchRooms, signIn, signUp } from "../controler/userControler.js";

const router = express.Router();

router.post("/", signUp);
router.post("/login", signIn);
router.post('/rooms',verifyToken,searchRooms)


export default router;
