import { query } from "$lib/database/maria";

export async function load() {
	const latestViews: [{'pageName':string}] = await query('SELECT page as pageName FROM pageviews ', ['pageviews']);
	return {
		latestViews
	}
}
