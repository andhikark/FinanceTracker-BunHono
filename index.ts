const st = new Date().getTime();
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import transaction from './routes/transaction.routes';


const app = new Hono({ strict: false });
app.use(logger());
app.get('/', (c) =>
	c.json({
		success: true,
		payload: null,
		message: 'Welcome to Hono',
	})
);

app.route('/transaction', transaction);


const en = new Date().getTime();

console.log(`${en - st} ms to start the server`);
export default {
	port: Bun.env.PORT || 8000,
	fetch: app.fetch,
};