import { parse } from 'tldts';

export const actions = {
	setTheme: async ({ request, cookies, url }) => {
		const parsedUrl = parse(url.hostname);
		const data = await request.formData();
		const theme = data.get('theme');
		if (!theme) return;
		cookies.set('theme', theme.toString(), {
			path: '/',
			httpOnly: true,
			domain: parsedUrl.domain ? parsedUrl.domain : url.hostname,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 30 * 365
		});
	},
	setLang: async ({ request, cookies, url }) => {
		const parsedUrl = parse(url.hostname);
		const data = await request.formData();
		const lang = data.get('lang');
		if (!lang) return;
		cookies.set('lang', lang.toString(), {
			path: '/',
			httpOnly: true,
			domain: parsedUrl.domain ? parsedUrl.domain : url.hostname,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 30 * 365
		});
	}
};
