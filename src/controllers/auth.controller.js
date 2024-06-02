import { createUser } from "../services/auth.js";

export const registerForm = (req, res) => {
    res.render("register");
}

export const register = async (req, res) => {
    try {
        const data = req.body
        await createUser(data);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
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