import passport from 'passport';

export const localAuth = passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/auth/login',
});

export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/profile' });

export const verifyAuth = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect('/auth/login');
    next();
};
