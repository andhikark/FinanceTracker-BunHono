import { Context } from 'hono';
import * as jwt from 'jsonwebtoken';

const Verify = async (c: Context) => {
	const { token } = await c.req.json();

	try {
		const secret = Bun.env.JWT_SECRET!;
		jwt.verify(token, secret);
		return c.json(
			{
				success: true,
				payload: null,
				message: 'Token is valid',
			},
			200
		);
	} catch (err) {
		return c.json(
			{
				success: false,
				payload: null,
				message: 'Invalid token',
			},
			200
		);
	}
};

export default Verify;