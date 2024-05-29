import { Context } from "hono";
import editTransactionService from "../../../services/Transaction/editTransaction";

const editTransaction = async (c: Context) => {
    const { id, amount, type, category, description, } = await c.req.json();
    try {
        const response = await editTransactionService(id, amount, type, category, description);
        return c.json({success: true, payload: response, message: "Transaction updated successfully"});
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

export default editTransaction;