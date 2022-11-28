import express from "express";
import {
    getUsers,
    login,
    multiFactorAuthentication,
    register,
} from "../services/user.service.js";

const router = express.Router();

router.post("/login", login);

router.post("/verifyMultiFactor", multiFactorAuthentication);

router.post("/register", register);

router.get("/users", getUsers);


export default router;
