import express from "express";
import {
    getUserData,
    changeAuthType
} from "../services/user.service.js";

const router = express.Router();

router.get("/getUserData", getUserData);
router.post("/changeAuthType", changeAuthType);

export default router;
