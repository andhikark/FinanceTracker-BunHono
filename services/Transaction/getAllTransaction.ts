import prisma from "../prisma/prisma";

const getAllTransactionService = async () => {
	const response = await prisma.transaction.findMany();

	return response;
};

export default getAllTransactionService;