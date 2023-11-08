import { exec } from '$lib/database/maria';
export const GET = async ({ params: { path, sessionId, name, customAction } }) => {
	exec('INSERT INTO actions (url, user_id, label, action_type)  VALUE (?, ?, ?, ?) ', [
		'/' + path,
		sessionId ?? 'Guest',
		name,
		customAction
	]).then();
	return new Response();
};
