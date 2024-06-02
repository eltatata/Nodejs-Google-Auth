import passport from 'passport';

import { prisma } from '../database/db.js';

import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { createUserGoogle } from '../services/auth.js';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await createUserGoogle({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: null,
                image: profile.photos[0].value
            });

            done(null, user);
        } catch (error) {
            done(error);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (error) {
        done(error);
    }
});