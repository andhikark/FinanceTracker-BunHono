import { Context } from "hono";
import { genSalt, hash } from "bcrypt";
import createUser from "../../services/Auth/createUser";

const register = async (c: Context) => {
    const { email,username, password } = await c.req.json();

	if (!email || !username || !password) {
		return c.json(
			{
				success: false,
				payload: {
					code: 1,
				},
				message: 'Missing required fields',
			},
			200
		);
	}
    if (!Bun.env.AUTH_SALT) throw new Error('No auth salt found in .env');
	const authSalt: number = parseInt(Bun.env.AUTH_SALT);

	const salt = await genSalt(authSalt);
	const hashedPassword = await hash(password, salt);

	try {
		await createUser( email, hashedPassword,username);
	} catch (err) {
		return c.json(
			{
				success: false,
				payload: {
					code: 3,
				},
				message: 'Failed to register user',
			},
			200
		);
	}

	return c.json(
		{
			success: true,
			payload: {
				code: 0,
			},
			message: 'User registered successfully',
		},
		200
	);

};

export default register;