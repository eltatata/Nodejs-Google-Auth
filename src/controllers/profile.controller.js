export const getProfile = async (req, res) => {
    return res.render("profile", req.user);
}

export const settingsForm = (req, res) => {
    return res.render("settings", req.user);
}