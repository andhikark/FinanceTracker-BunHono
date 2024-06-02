import { Hono } from "hono";
import register from "../controllers/Auth/register";
import Login from "../controllers/Auth/login";
import Verify from "../controllers/Auth/verify";



const auth = new Hono({ strict: false });

auth.post("/register", register);
auth.post("/login",Login);
auth.post("/verify",Verify);

export default auth;