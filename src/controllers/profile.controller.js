import { updateUser } from "../services/profile.js";

export const getProfile = async (req, res) => {
    return res.render("profile", req.user);
}

export const settingsForm = (req, res) => {
    return res.render("settings", req.user);
}

export const settings = async (req, res) => {
    try {
        const id = req.user.id;
        const image = req.file;
        const { username, email } = req.body;

        await updateUser(username, email, image, id)

        res.redirect("/profile")
    } catch (error) {
        console.log(error);
    }
}