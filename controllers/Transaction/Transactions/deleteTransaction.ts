import { Context } from "hono";
import deleteTransactionService from "../../../services/Transaction/deleteTransaction";

const deleteTransaction = async (c: Context) => {
    const id = await c.req.param('id');
    console.log(id);
    try {
        const response = await deleteTransactionService(Number(id));
        return c.json({success: true, payload: response, message: "Transaction deleted successfully"});
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

export default deleteTransaction;