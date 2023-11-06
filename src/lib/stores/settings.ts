import { browser } from '$app/environment';

import { writable } from 'svelte/store';

const initialValue = browser
	? localStorage.theme
		? localStorage.theme
		: window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
	: null;

export const themeStore = writable<string>(initialValue);

themeStore.subscribe((value) => {
	if (browser) {
		localStorage.theme = value;
	}
});
