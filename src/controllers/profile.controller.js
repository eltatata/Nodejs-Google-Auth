export const getProfile = async (req, res) => {
    return res.render("profile", req.user);
}