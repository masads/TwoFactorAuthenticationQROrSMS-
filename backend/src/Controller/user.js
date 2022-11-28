import express from "express";
import {
    getUserData
} from "../services/user.service.js";

const router = express.Router();

router.get("/getUserData", getUserData);


export default router;
