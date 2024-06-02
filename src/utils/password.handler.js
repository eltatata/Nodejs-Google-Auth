import bcryptjs from "bcryptjs"

export const encrypt = async (pass) => {
    const passwordHash = await bcryptjs.hash(pass, 8);
    return passwordHash;
};

export const verified = async (pass, passHash) => {
    const isCorrect = await bcryptjs.compare(pass, passHash);
    return isCorrect;
};