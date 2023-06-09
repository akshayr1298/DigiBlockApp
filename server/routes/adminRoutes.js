import express from "express";
import { addRooms, adminLogin, delectRooms, delectUser, getRooms, updateRooms } from "../controler/adminControler.js";


const router = express.Router()

router.post('/admin',adminLogin);
router.post('/addroom',addRooms);
router.get('/getrooms',getRooms)
router.put('/updateroom/:id',updateRooms)
router.delete('/delete/:id',delectRooms)
router.delete('/deleteuser/:id',delectUser)




export default router
