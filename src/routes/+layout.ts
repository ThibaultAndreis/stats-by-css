import { loadTranslations } from '$lib/i18n/translations';

export const load = async ({ url, data }) => {
	await loadTranslations(data.lang, url.pathname); // keep this just before the `return`
	return data;
};
