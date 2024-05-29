import { Transaction_type,Transaction_category } from "@prisma/client";
import prisma from "../prisma/prisma";

const createTransactionService = async (id:number, amount:number,type:String,category:string, description:string) => {
	const response = await prisma.transaction.create({
        data:{
            userId: id,
            amount,
            type: type as Transaction_type, // Fix: Change the type of 'type' variable
            category: category  as Transaction_category,
            description,
        }
        //
    });

	return response;
};

export default createTransactionService;