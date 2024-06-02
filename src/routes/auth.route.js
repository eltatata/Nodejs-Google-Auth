import express from "express";

import { googleAuth, googleAuthCallback } from "../middlewares/auth.middleware.js";
import { googleCallback, logout, register, registerForm } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/register", registerForm);
router.post("/register", register)

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback, googleCallback);

router.get('/logout', logout);

export default router;