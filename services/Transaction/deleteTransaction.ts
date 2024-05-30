import prisma from "../prisma/prisma";

const deleteTransactionService = async (id:number) => {
    const response = await prisma.transaction.delete({
        where:{
            id: id
        }
    });

    return response;
}

export default deleteTransactionService;