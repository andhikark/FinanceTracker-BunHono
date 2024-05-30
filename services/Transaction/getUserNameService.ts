import prisma from "../prisma/prisma";

const getUserNameService = async (name:string) => {
    const response = await prisma.user.findMany({
        where:{
            name: {
                contains: name,
                
            }
        },
        select: {
            id: true,
            email: true,
            name: true,
            Transaction: true, // If you want to include transactions related to the user
        }
    });
    if (response.length === 0) {
        return false;
    }
    
    console.log(response);
    return response;

}

export default getUserNameService;