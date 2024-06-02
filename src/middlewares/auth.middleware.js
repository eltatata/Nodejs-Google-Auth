import passport from 'passport';

export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });

export const verifyAuth = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/auth/google');
    next();
};
