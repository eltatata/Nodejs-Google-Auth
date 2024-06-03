import express from "express";

import { verifyAuth } from "../middlewares/auth.middleware.js";
import { getProfile, settingsForm } from "../controllers/profile.controller.js";

const router = express.Router();

router.get('/', verifyAuth, getProfile);
router.get('/settings', verifyAuth, settingsForm);

export default router;