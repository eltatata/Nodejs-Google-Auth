import { createUser } from "../services/auth.js";

export const registerForm = (req, res) => {
    res.render("register", { formType: 'register' });
}

export const register = async (req, res) => {
    try {
        const data = req.body
        await createUser(data);
        res.redirect("/auth/login");
    } catch (error) {
        console.log(error);
    }
}

export const loginForm = (req, res) => {
    res.render("login", { formType: 'login' });
}

export const googleCallback = (req, res) => {
    res.redirect('/profile');
}

export const logout = (req, res) => {
    req.logout(() => {
        try {
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    });
}