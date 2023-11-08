import { exec } from '$lib/database/maria';

export const GET = async ({ params: { path, sessionId, pageName } }) => {
	 exec('INSERT INTO pageviews (url, user_id, name)  VALUE (?, ?, ?) ', ['/'+path, sessionId ?? 'Guest', pageName?.replace('pageName=','')??null]).then();
	return new Response();
};
