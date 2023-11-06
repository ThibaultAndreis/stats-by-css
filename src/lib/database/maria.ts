import {
	DATABASE_HOST,
	DATABASE_NAME,
	DATABASE_PASSWORD,
	DATABASE_USER
} from '$env/static/private';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
	host: DATABASE_HOST,
	user: DATABASE_USER,
	password: DATABASE_PASSWORD,
	connectionLimit: 5,
	trace: true,
	database: DATABASE_NAME
});

export async function query(query: string, values?: string[]) {
	let conn;
	try {
		conn = await pool.getConnection();
		return await conn.query(query, values);
	} finally {
		if (conn) conn.release(); //release to pool
	}
}

export async function exec(query: string, values: (string | number)[] | null = null) {
	let conn;
	try {
		conn = await pool.getConnection();
		await conn.query(query, values);
	} finally {
		if (conn) conn.release(); //release to pool
	}
}
