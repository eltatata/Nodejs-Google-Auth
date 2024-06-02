import { prisma } from "../database/db.js";
import { encrypt } from "../utils/password.handler.js";

export const createUser = async (data) => {
    const exists = await prisma.user.findUnique({ where: { email: data.email } });
    if (exists) throw new Error("There is already a registered user with this email address");

    await prisma.user.create({
        data: {
            email: data.email,
            password: await encrypt(data.password),
        }
    });

    console.log("User created");
}
export const createUserGoogle = async (data) => {
    let user = await prisma.user.findUnique({ where: { email: data.email } });
    if (user) return user;

    user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: null,
            image: data.image
        }
    });

    console.log("User created");

    return user;
}