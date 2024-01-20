import express from "express";
import passport from 'passport'

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home")
})

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/api/profile');
    }
);

router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) return res.redirect("/api/auth/google");

    return res.render("profile", req.user);
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error al cerrar sesión.' });
        }
        res.redirect('/api');
    });
});

export default router;