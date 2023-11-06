import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/layout.json')).default
		},
		{
			locale: 'fr',
			key: 'common',
			loader: async () => (await import('./fr/layout.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'fr',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./fr/home.json')).default
		},
		{
			locale: 'en',
			key: 'settings',
			routes: ['/settings'],
			loader: async () => (await import('./en/settings.json')).default
		},
		{
			locale: 'fr',
			key: 'settings',
			routes: ['/settings'],
			loader: async () => (await import('./fr/settings.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
