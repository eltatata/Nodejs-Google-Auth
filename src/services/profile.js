import { prisma } from "../database/db.js";

export const updateUser = async (name, email, image, id) => {
    const exists = await prisma.user.findUnique({ where: { id } });
    if (!exists) throw new Error('User not found');

    const data = {};
    if (name) data.name = name;
    if (email) data.email = email;
    if (image) data.image = `/storage/${image.filename}`;

    await prisma.user.update({
        where: { id },
        data: data
    });

    console.log('User updated');
}