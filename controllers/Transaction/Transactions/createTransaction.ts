import { Context } from "hono";
import createTransactionService from "../../../services/Transaction/createTransaction";


const CreateTransaction = async (c: Context) => {
    const { userId, amount, type, category, description, } = await c.req.json();
    try {
        const response = await createTransactionService(userId, amount, type, category, description);
        return c.json({success: true, payload: response, message: "Transaction created successfully"});
    }
    catch (e) {
		console.error(e);
		return c.json(
			{
				success: false,
				payload: [],
				message: e,
			},
			200
		);
	}
}

export default CreateTransaction;