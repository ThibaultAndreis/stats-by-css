import { exec } from '$lib/database/maria';

export const GET = async ({ params: { path, sessionId } }) => {
	 exec('INSERT INTO pageviews (page, user_id)  VALUE (?, ?) ', [path, sessionId ?? 'Guest']).then();
	return new Response();
};
