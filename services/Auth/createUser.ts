import prisma from "../prisma/prisma";

const createUser = async (email:string, password:string, name:string) => {
    const response = await prisma.user.create({
        data:{
            email,
            password,
            name,
        }
    });

    return response;

}

export default createUser;