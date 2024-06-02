import prisma from "../prisma/prisma";


const GetUser = (name: string) => {
	return prisma.user.findFirst({
		where: { name },
	});
};

export default GetUser;