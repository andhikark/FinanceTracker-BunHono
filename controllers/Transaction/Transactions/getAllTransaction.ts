import { Context } from "hono";
import getAllTransactionService from "../../../services/Transaction/getAllTransaction";

const getAllTransaction = async (c: Context) => {
    try {
        const response = await getAllTransactionService();
        return c.json({success: true, payload: response, message: "All transactions fetched successfully"});
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

export default getAllTransaction;