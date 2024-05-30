import { Context } from "hono";
import getUserNameService from "../../services/Transaction/getUserNameService";

const getUserName = async (c: Context) => {
    const  name  = await c.req.query('q');
    try {
        if (!name) {
            throw new Error("Name is undefined");
        }
        const response = await getUserNameService(name);
        if (!response) {
            return c.json({success: false, payload: [], message: "User not found"});
        }
        return c.json({success: true, payload: response, message: "User found"});
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
export default getUserName;