import express from "express";

import { verifyAuth } from "../middlewares/auth.middleware.js";
import { getProfile, settings, settingsForm } from "../controllers/profile.controller.js";
import multerMiddleware from "../middlewares/upload.middleware.js";

const router = express.Router();

router.get('/', verifyAuth, getProfile);

router.get('/settings', verifyAuth, settingsForm);
router.post("/settings", verifyAuth, multerMiddleware.single("image"), settings);

export default router;