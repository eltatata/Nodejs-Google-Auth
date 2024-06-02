import express from "express";

import { verifyAuth } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/profile.controller.js";

const router = express.Router();

router.get('/', verifyAuth, getProfile);

export default router;