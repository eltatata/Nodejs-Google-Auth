import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    if (!req.isAuthenticated()) return res.redirect("/auth/google");

    return res.render("profile", req.user);
});

export default router;