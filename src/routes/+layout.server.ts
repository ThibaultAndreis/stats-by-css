import { locales } from '$lib/i18n/translations';
import { get } from 'svelte/store';

function getLang(request: Request) {
	const langAccept = request.headers.get('Accept-Language') ?? '';
	if (langAccept) {
		const langAccepted = langAccept.replace(/-[a-zA-Z]{2}/g, '').split(',');
		const localesExisting = get(locales);
		const res = langAccepted.find((el) => localesExisting.includes(el));
		if (res) {
			return res;
		}
	}
	return 'fr';
}

export async function load({ cookies, request }) {
	let lang = cookies.get('lang');
	if (!lang) {
		lang = getLang(request);
	}

	const theme = cookies.get('theme');
	return {
		theme,
		lang
	};
}
