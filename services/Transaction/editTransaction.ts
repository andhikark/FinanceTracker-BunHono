import { Transaction_type,Transaction_category } from "@prisma/client";
import prisma from "../prisma/prisma";

const editTransactionService = async (id:number, amount:number,type:String,category:string, description:string) => {
	const response = await prisma.transaction.update({
        where: {
            id: id,
        },
        data:{
            amount,
            type: type as Transaction_type, // Fix: Change the type of 'type' variable
            category: category  as Transaction_category,
            description,
        }
        //
    });

	return response;
};

export default editTransactionService;