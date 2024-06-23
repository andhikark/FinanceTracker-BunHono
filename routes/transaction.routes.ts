import { Hono } from "hono";
import getAllTransaction from "../controllers/Transaction/Transactions/getAllTransaction";
import editTransaction from "../controllers/Transaction/Transactions/editTransaction";
import CreateTransaction from "../controllers/Transaction/Transactions/createTransaction";
import deleteTransaction from "../controllers/Transaction/Transactions/deleteTransaction";
import getUserName from "../controllers/Transaction/getUserName";
import uploadImage from "../controllers/upload";




const transaction = new Hono({ strict: false });

transaction.get("/allTransaction", getAllTransaction);
transaction.get("/searchUser",getUserName );
transaction.post("/editTransaction", editTransaction);
transaction.post("/createTransaction", CreateTransaction);
transaction.delete("/deleteTransaction/:id", deleteTransaction);
transaction.post("/upload",uploadImage)


export default transaction;

