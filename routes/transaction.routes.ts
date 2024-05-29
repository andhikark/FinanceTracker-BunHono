import { Hono } from "hono";
import getAllTransaction from "../controllers/Transaction/Transactions/getAllTransaction";
import editTransaction from "../controllers/Transaction/Transactions/editTransaction";
import CreateTransaction from "../controllers/Transaction/Transactions/createTransaction";


const transaction = new Hono({ strict: false });

transaction.get("/allTransaction", getAllTransaction);
transaction.post("/editTransaction", editTransaction);
transaction.post("/createTransaction", CreateTransaction);


export default transaction;

