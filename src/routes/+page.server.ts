import { query } from '$lib/database/maria';

export async function load() {
	const latestViews: Promise<[{ name?: string; url: string }]> = query(
		'SELECT name, url FROM pageviews ORDER BY id DESC LIMIT 10'
	);
	const viewPerPage: Promise<[{ label: string; value: number }]> = query(
		'SELECT IFNULL(name,url) AS label, count(1) AS value FROM pageviews GROUP BY url ORDER BY id DESC LIMIT 10'
	);

	return {
		latestViews,
		viewPerPage
	};
}
