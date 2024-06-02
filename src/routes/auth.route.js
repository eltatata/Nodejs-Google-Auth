import express from "express";

import { googleAuth, googleAuthCallback, localAuth } from "../middlewares/auth.middleware.js";
import { googleCallback, loginForm, logout, register, registerForm } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/register", registerForm);
router.post("/register", register);

router.get("/login", loginForm);
router.post('/login', localAuth);

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback, googleCallback);

router.get('/logout', logout);

export default router;